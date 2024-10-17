import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { UserNotificationComponent } from '../user-notification/user-notification.component';
import { UserCartComponent } from '../user-cart/user-cart.component';
import { UserOrdersComponent } from '../user-orders/user-orders.component';
import { UserFavoriteComponent } from '../user-favorite/user-favorite.component';
import { UserSettingsComponent } from '../user-settings/user-settings.component';
import { UserSearchDialogComponent } from '../user-search-dialog/user-search-dialog.component';

@Component({
  selector: 'app-user-search-landing',
  templateUrl: './user-search-landing.component.html',
  styleUrls: ['./user-search-landing.component.scss']
})
export class UserSearchLandingComponent implements OnInit {
  searchTerm: string = '';
  notificationBadge = 3;
  cartBadge = 2;

  searchResults = [
    {
      name: 'Elegant Decorations',
      description: 'Providing world-class decoration services for weddings, parties, and more.',
      category: 'Decorations',
      rating: 4.5,
      peopleServed: 120
    },
    {
      name: 'Venue Royale',
      description: 'Premium venues for all types of events.',
      category: 'Venue',
      rating: 4.2,
      peopleServed: 90
    },
    {
      name: 'Elite Catering',
      description: 'Top-notch catering with a wide range of cuisines.',
      category: 'Catering',
      rating: 4.8,
      peopleServed: 150
    },
    {
      name: 'Star Entertainment',
      description: 'Bringing the best entertainment acts to your events.',
      category: 'Entertainment',
      rating: 4.7,
      peopleServed: 200
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchTerm = params['term'];
      console.log('Search term:', this.searchTerm);  // Debug log
    });
  }

  getStars(rating: number): Array<number> {
    return Array(Math.round(rating)).fill(0);
  }  

  goToUserProfile() {
    this.router.navigate(['/userprofile']);
  }

  openNotificationDialog() {
    this.dialog.open(UserNotificationComponent, {
      width: '1000px',
      height: '500px',
      panelClass: 'custom-dialog-container',
      data: {}
    });
  }

  openCartDialog() {
    this.dialog.open(UserCartComponent, {
      width: '1000px',
      height: '500px',
      panelClass: 'custom-dialog-container',
      data: {}
    });
  }

  openOrdersDialog() {
    this.dialog.open(UserOrdersComponent, {
      width: '1000px',
      height: '500px',
      panelClass: 'custom-dialog-container',
      data: {}
    });
  }

  openFavoriteDialog() {
    this.dialog.open(UserFavoriteComponent, {
      width: '1000px',
      height: '500px',
      panelClass: 'custom-dialog-container',
      data: {}
    });
  }

  openSettingsDialog() {
    this.dialog.open(UserSettingsComponent, {
      width: '1000px',
      height: '500px',
      panelClass: 'custom-dialog-container',
      data: {}
    });
  }

  openSearchDialog() {
    this.dialog.open(UserSearchDialogComponent, {
      width: '1000px',
      height: 'auto',
      panelClass: 'custom-dialog-container',
      data: {}
    });
  }
}
