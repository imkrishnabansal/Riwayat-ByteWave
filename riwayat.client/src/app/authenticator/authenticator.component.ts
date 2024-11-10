// authenticator.component.ts
import { Component, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DevService } from '../dev-service.service'; 

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.scss']
})
export class AuthenticatorComponent {
  isLogin: boolean = true;
  authForm: FormGroup;
  newAuthForm: FormGroup;
  teamMembers: any[] = [];

  constructor(
    private router: Router,
    @Optional() public dialogRef: MatDialogRef<AuthenticatorComponent>,
    private fb: FormBuilder,
    private devService: DevService
  ) {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.newAuthForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      newPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Fetch team member data on component initialization
    this.devService.getTeamMembers().subscribe((data) => {
      this.teamMembers = data;
    });
  }

  toggleAuth() {
    this.isLogin = !this.isLogin;
  }

  onSubmit() {
    if (this.isLogin) {
      if (this.authForm.valid) {
        const { username, password } = this.authForm.value;

        // Check credentials against team members
        const member = this.teamMembers.find(
          (member) => member.username === username && member.password === password
        );

        if (member) {
          alert(`Welcome, ${member.name}`);
          this.router.navigate(['/user']);  // Adjust this route if needed
        } else if (username === 'user' && password === 'user') {
          this.router.navigate(['/user']);
          alert("Weelcome, User");
        } else {
          alert('Invalid credentials');
        }
      } else {
        alert('Please fill out all fields correctly');
      }
    } else {
      // Sign-up logic
      if (this.newAuthForm.valid) {
        alert('Account created successfully');
        console.log(this.newAuthForm.value);
        // Additional account creation handling
      } else {
        alert('Please fill out all fields correctly');
      }
    }

    // Close the dialog if opened in a dialog
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  goToShowcase() {
    this.router.navigate(['/showcase']);
  }
}
