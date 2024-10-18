import { Component } from '@angular/core';

interface Vendor {
  name: string;
  service: string;
  cost: number;
}

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
  styleUrls: ['./user-favorite.component.scss']
})
export class UserFavoriteComponent {
  // Hardcoded favorite vendors
  favoriteVendors: Vendor[] = [
    {
      name: 'Delicious Foods',
      service: 'Catering',
      cost: 500
    },
    {
      name: 'Grand Hall',
      service: 'Venue Booking',
      cost: 1000
    },
    {
      name: 'Live Band',
      service: 'Entertainment',
      cost: 300
    }
  ];

  // Unlike a vendor from favorites
  unlikeVendor(index: number): void {
    this.favoriteVendors.splice(index, 1);
  }
}
