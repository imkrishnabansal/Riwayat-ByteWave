import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'] // Corrected: 'styleUrls' should be plural
})
export class UserProfileComponent implements OnInit {
  
  profileData: any;
  profileImage: string | ArrayBuffer | null = null;
  isEditing: boolean = false;
  editedProfileData: any;
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile() {
    // Fetch profile data and populate the form
    this.profileData = {
      name: 'Prakhar Tripathi',
      email: 'imprakhartripathiofficial@gmail.com',
      phone: '+91 8707406448',
      userID: '4269'
    };
    this.editedProfileData = { ...this.profileData };
    this.profileImage = 'assets/profile-image.jpg'; // Placeholder image
  }

  onEdit() {
    this.isEditing = true;
  }

  onSave() {
    this.isEditing = false;
    this.profileData = { ...this.editedProfileData };
  }

  onCancel() {
    this.isEditing = false;
    this.editedProfileData = { ...this.profileData };
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.profileImage = reader.result;
    };
    reader.readAsDataURL(file);
  }

  openPaymentDialog(): void {
    this.dialog.open(PaymentDialogComponent, {
      width: '400px', // adjust the width as needed
      data: { /* pass any data if needed */ }
    });
  }

  logOut(){
    this.dialog.closeAll()
    this.router.navigate(['/'])
  }
}
