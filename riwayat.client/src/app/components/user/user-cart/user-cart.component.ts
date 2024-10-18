import { Component } from '@angular/core';

interface Order {
  serviceName: string;
  vendor: string;
  cost: number;
  scheduledDate: Date;
}

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent {
  // Hardcoded orders
  orders: Order[] = [
    {
      serviceName: 'Catering Service',
      vendor: 'Delicious Foods',
      cost: 500,
      scheduledDate: new Date('2024-11-20')
    },
    {
      serviceName: 'Venue Booking',
      vendor: 'Grand Hall',
      cost: 1000,
      scheduledDate: new Date('2024-12-01')
    }
  ];

  // Remove an order from the cart
  removeOrder(index: number): void {
    this.orders.splice(index, 1);
  }

  // Edit an order (example change)
  editOrder(index: number): void {
    
  }

  // Simulate placing an order
  placeOrder(): void {
    alert('Order placed successfully!');
    this.orders = [];  // Clear the cart after placing order
  }
}
