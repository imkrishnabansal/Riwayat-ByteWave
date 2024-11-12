import { Component, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DevService } from '../dev-service.service';
import { AuthService } from '../auth.service'; // Import AuthService

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
    private devService: DevService,
    private authService: AuthService // Inject AuthService
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
    this.devService.getTeamMembers().subscribe((data) => {
      this.teamMembers = data;
    });
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
          this.authService.login(member);  // Store user in AuthService
          this.router.navigate(['/user']);
        } else if (username === 'user' && password === 'user') {
          const guestUser = { name: "Guest User", username: "user" };
          this.authService.login(guestUser);  // Store guest user
          alert("Welcome, User");
          this.router.navigate(['/user']);
        } else {
          alert('Invalid credentials');
        }
      } else {
        alert('Please fill out all fields correctly');
      }
    } else {
      // Handle sign-up logic here
      if (this.newAuthForm.valid) {
        alert('Account created successfully');
        console.log(this.newAuthForm.value);
        this.router.navigate(['/user']);
      } else {
        alert('Please fill out all fields correctly');
      }
    }

    // Close the dialog if opened in a dialog
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  toggleAuth() {
    this.isLogin = !this.isLogin;
  }

  goToShowcase() {
    this.router.navigate(['/showcase']);
  }
}
