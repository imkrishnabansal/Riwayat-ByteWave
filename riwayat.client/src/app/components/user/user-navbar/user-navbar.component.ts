import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { UserNotificationComponent } from '../user-notification/user-notification.component';
import { UserCartComponent } from '../user-cart/user-cart.component';
import { UserOrdersComponent } from '../user-orders/user-orders.component';
import { UserFavoriteComponent } from '../user-favorite/user-favorite.component';
import { UserSettingsComponent } from '../user-settings/user-settings.component';
import { UserSearchDialogComponent } from '../user-search-dialog/user-search-dialog.component';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.scss'
})


export class UserNavbarComponent {
  notificationBadge = 3;
  cartBadge = 2;

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  goToUserProfile() {
    this.router.navigate(['/userprofile']);
  }

  goToUserHome() {
    this.router.navigate(['/user']);
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
      height: 'auto',
      panelClass: 'custom-dialog-container',
      data: {}
    });
  }

  openOrdersDialog() {
    this.dialog.open(UserOrdersComponent, {
      width: '1000px',
      height: 'auto',
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
      height: 'auto',
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
