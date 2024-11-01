import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orderprev',
  templateUrl: './orderprev.component.html',
  styleUrls: ['./orderprev.component.scss']
})
export class OrderprevComponent implements OnInit {
  isPlannerOrder: boolean | undefined;
  isVendorOrder: boolean | undefined;

  orderDetails: any;
  plannerName: string | undefined;
  tier: string | undefined;
  fare: string | undefined;
  Vendorimage: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.plannerName = params['plannerName'];
      this.tier = params['tier'];
      this.isPlannerOrder = params['isPlannerOrder'] === 'true';
      this.fare = params['plannerFare'];

      // Parse the order details if they are in JSON string format
      this.orderDetails = params['orderDetails'] ? JSON.parse(params['orderDetails']) : {};
      var tempPIURL = '';
      if (this.plannerName === 'Donna'){
        tempPIURL = 'assets/donna.jpg';
      } else if (this.plannerName === 'Dr. House'){
        tempPIURL = 'assets/dr-house2.jpg';
      } else if (this.plannerName === 'Harvey Specter'){
        tempPIURL = 'assets/harvey.jpg';
      } else{
        tempPIURL = 'assets/user.png'
      }
      this.Vendorimage = tempPIURL;
    });
  }
}
