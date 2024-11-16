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
    // Format the bill details into a text format
    const billContent = `
      Order Invoice
      -------------
      Order Type: ${this.isPlannerOrder ? 'Planner Order' : 'Vendor Order'}
      Name: ${this.plannerName || this.orderDetails.vendorName || 'N/A'}
      Tier: ${this.tier || 'N/A'}
      Fare: ${this.fare || 'N/A'}
  
      Order Details:
      ${JSON.stringify(this.orderDetails, null, 2)}
  
      Thank you for using our services!
    `;
  
    // Create a Blob from the bill content and trigger the download
    const blob = new Blob([billContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'invoice.txt';
    link.click();
  
    // Clean up the object URL
    window.URL.revokeObjectURL(url);
  }
  
  
}
