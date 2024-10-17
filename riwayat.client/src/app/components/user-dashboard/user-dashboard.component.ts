// user-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {


  categories = [
    {
      name: 'Catering',
      trendingServices: ['Italian Cuisine', 'Indian Buffet', 'Chinese Special']
    },
    {
      name: 'Venue',
      trendingServices: ['Beach Wedding', 'Garden Party', 'Banquet Hall']
    },
    {
      name: 'Entertainment',
      trendingServices: ['Live Band', 'DJ', 'Stand-up Comedy']
    },
    {
      name: 'Decorations',
      trendingServices: ['Floral Decor', 'Theme Lighting', 'Balloon Decor']
    }
  ];

  offers = [
    '10% off on Venue bookings',
    'Flat ₹500 off on Catering services',
    'Free DJ with Wedding Package'
  ];

  previousOrders = [
    'Italian Cuisine - ₹20,000',
    'Banquet Hall - ₹50,000',
    'Live Band - ₹15,000'
  ];

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {

  }

    // Navigate to search landing page with category name
    browseCategory(categoryName: string) {
      this.router.navigate(['/search', categoryName]);
    }

 

}
