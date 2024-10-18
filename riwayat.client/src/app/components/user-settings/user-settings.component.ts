import { Component } from '@angular/core';

interface UserSettings {
  notifications: boolean;
  homeAddress: string;
  officeAddress: string;
  latestOffers: boolean;
}

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent {
  settings: UserSettings = {
    notifications: true,
    homeAddress: '123 Home St, City, Country',
    officeAddress: '456 Office Rd, City, Country',
    latestOffers: false
  };

  isUpdated: boolean = false;
  message: string = '';

  // Mark settings as updated
  markAsUpdated(): void {
    this.isUpdated = true;
  }

  // Save the settings
  saveSettings(): void {
    // Logic to save settings (e.g., send to API)
    this.message = 'Settings saved successfully!';
    this.isUpdated = false;
  }
}
