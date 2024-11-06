import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { UserNotificationComponent } from '../user-notification/user-notification.component';
import { UserCartComponent } from '../user-cart/user-cart.component';
import { UserOrdersComponent } from '../user-orders/user-orders.component';
import { UserFavoriteComponent } from '../user-favorite/user-favorite.component';
import { UserSettingsComponent } from '../user-settings/user-settings.component';
import { UserSearchDialogComponent } from '../user-search-dialog/user-search-dialog.component';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent {
  private searchDialogRef: MatDialogRef<UserSearchDialogComponent> | null = null;

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    // Listen for the '/' keypress
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  // Clean up the event listener on component destruction
  ngOnDestroy(): void {
    window.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key === '/') {
      event.preventDefault(); // Prevent default browser behavior
      this.toggleSearchDialog();
    }
  }

  toggleSearchDialog(): void {
    if (this.searchDialogRef) {
      // If dialog is open, close it
      this.searchDialogRef.close();
      this.searchDialogRef = null;
    } else {
      // If dialog is not open, open it
      this.searchDialogRef = this.dialog.open(UserSearchDialogComponent, {
        width: '1000px',
        height: 'auto',
        panelClass: 'custom-dialog-container',
      });

      // Clear the reference when dialog closes
      this.searchDialogRef.afterClosed().subscribe(() => {
        this.searchDialogRef = null;
      });
    }
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
    });
  }

  openCartDialog() {
    this.dialog.open(UserCartComponent, {
      width: '1000px',
      height: 'auto',
      panelClass: 'custom-dialog-container',
    });
  }

  openOrdersDialog() {
    this.dialog.open(UserOrdersComponent, {
      width: '1000px',
      height: 'auto',
      panelClass: 'custom-dialog-container',
    });
  }

  openFavoriteDialog() {
    this.dialog.open(UserFavoriteComponent, {
      width: '1000px',
      height: '500px',
      panelClass: 'custom-dialog-container',
    });
  }

  openSettingsDialog() {
    this.dialog.open(UserSettingsComponent, {
      width: '1000px',
      height: 'auto',
      panelClass: 'custom-dialog-container',
    });
  }
}
