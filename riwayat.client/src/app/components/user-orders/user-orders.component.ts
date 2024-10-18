import { Component } from '@angular/core';

interface Order {
  serviceName: string;
  vendor: string;
  cost: number;
  scheduledDate: Date;
}

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent {
  // Hardcoded current and previous orders
  currentOrders: Order[] = [
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

  previousOrders: Order[] = [
    {
      serviceName: 'Entertainment',
      vendor: 'Live Band',
      cost: 300,
      scheduledDate: new Date('2024-09-25')
    },
    {
      serviceName: 'Decorations',
      vendor: 'Floral Paradise',
      cost: 200,
      scheduledDate: new Date('2024-10-10')
    }
  ];

  // Edit an order (for current orders)
  editOrder(index: number): void {
    const updatedOrder = {
      ...this.currentOrders[index],
      serviceName: 'Updated Service Name'
    };
    this.currentOrders[index] = updatedOrder;
  }

  // Cancel an order (for current orders)
  cancelOrder(index: number): void {
    this.currentOrders.splice(index, 1);
  }
}
