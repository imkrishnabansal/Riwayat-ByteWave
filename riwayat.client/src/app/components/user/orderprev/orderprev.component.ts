import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-orderprev',
  templateUrl: './orderprev.component.html',
  styleUrls: ['./orderprev.component.scss']
})
export class OrderprevComponent implements OnInit {
  isPlannerOrder = false;
  isVendorOrder = false;
  orderDetails: any = {}; // Initialize as an empty object
  plannerName: string | undefined;
  tier: string | undefined;
  fare: string | undefined;
  plannerImage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef, // Inject ChangeDetectorRef
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // Parse the order details if they are in JSON string format
      this.orderDetails = params['orderDetails'] ? JSON.parse(params['orderDetails']) : {};
      console.log(this.orderDetails);

      this.isVendorOrder = params['isVendorOrder'] === 'true';
      this.plannerName = params['plannerName'];
      this.tier = params['tier'];
      this.isPlannerOrder = params['isPlannerOrder'] === 'true';
      this.fare = params['plannerFare'];

      // Set planner image based on name
      this.plannerImage = this.getPlannerImage(this.plannerName);

      // Trigger change detection after setting values
      this.cdr.detectChanges();

      // Call dumpOrderData to output data
    });
  }

  openPaymentDialog(): void {
    this.dialog.open(PaymentDialogComponent, {
      width: '400px',
      data: {
        orderDetails: this.orderDetails, 
        plannerName: this.plannerName, 
        tier: this.tier, 
        plannerImage: this.plannerImage, 
        isPlannerOrder: this.isPlannerOrder, 
        fare: this.fare
      }
    });
  }

  private getPlannerImage(plannerName: string | undefined): string {
    switch (plannerName) {
      case 'Donna': return 'assets/donna.jpg';
      case 'Dr. House': return 'assets/dr-house2.jpg';
      case 'Harvey Specter': return 'assets/harvey.jpg';
      default: return 'assets/user.png';
    }
  }

  goToPlannerProfile(){
    if (this.isPlannerOrder){
      this.router.navigate(['/plannerprofile', this.plannerName])
    }
  }

  goToVendorProfile(){
    if (this.isVendorOrder){
      this.router.navigate(['/vendorprofile', this.orderDetails.vendorName])
    }
  }

  goToSupport(){
    this.router.navigate(['/support']);
  }

  // Method to dump order details to the console or save as a JSON file
  dumpOrderData(): void {
    const dataToDump = {
      isPlannerOrder: this.isPlannerOrder,
      isVendorOrder: this.isVendorOrder,
      orderDetails: this.orderDetails,
      plannerName: this.plannerName,
      tier: this.tier,
      fare: this.fare,
      plannerImage: this.plannerImage
    };

    // Log data to console
    console.log('Dumped Order Data:', dataToDump);

    // Create a downloadable JSON file with the data
    const jsonString = JSON.stringify(dataToDump, null, 2); // Pretty-print with indentation
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'orderDetails.json';
    link.click();

    // Clean up the object URL
    window.URL.revokeObjectURL(url);
  }

  downloadBill(): void {
    // Define the HTML template for the bill
    const htmlTemplate = `
      <html>
        <head>
          <title>Invoice</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .invoice-container { max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ccc; }
            .invoice-header { text-align: center; }
            .invoice-header h1 { margin: 0; color: #333; }
            .invoice-details { margin-top: 20px; }
            .invoice-details th, .invoice-details td { padding: 8px 12px; }
            .invoice-details th { background-color: #f5f5f5; text-align: left; }
            .invoice-footer { margin-top: 30px; text-align: center; font-size: 12px; color: #777; }
            .total { text-align: right; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="invoice-container">
            <div class="invoice-header">
              <h1>Invoice</h1>
              <p>Order ID: 12345</p>
              <p>Date: ${new Date().toLocaleDateString()}</p>
            </div>
            
            <table class="invoice-details" width="100%">
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>Service A</td>
                <td>1</td>
                <td>$100</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Service B</td>
                <td>2</td>
                <td>$50</td>
                <td>$100</td>
              </tr>
              <tr class="total">
                <td colspan="3">Total Amount</td>
                <td>$200</td>
              </tr>
            </table>
            
            <div class="invoice-footer">
              <p>Thank you for your business!</p>
            </div>
          </div>
        </body>
      </html>
    `;
  
    // Create a Blob from the HTML template and trigger the download
    const blob = new Blob([htmlTemplate], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'invoice.html';
    link.click();
  
    // Clean up the object URL
    window.URL.revokeObjectURL(url);
  }
  
}
