import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component'; // Make sure to import the MenuComponent
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  // Array to hold ordered items
  orders: { name: string, quantity: number, price: number, total: number }[] = [];

  constructor(private menuComponent: MenuComponent) { }

  // Function to add ordered items from the menu
  addOrder(itemName: string, quantity: number) {
    // Find the item by its name
    const menuItem = this.menuComponent.menu.find(item => item.name === itemName);
    
    // Check if item exists
    if (menuItem && quantity > 0) {
      const total = menuItem.price * quantity;
      
      // Check if item is already in the orders array
      const existingOrder = this.orders.find(order => order.name === itemName);
      
      if (existingOrder) {
        // If the item already exists in orders, just update the quantity and total
        existingOrder.quantity += quantity;
        existingOrder.total = existingOrder.quantity * menuItem.price;
      } else {
        // If the item is not yet ordered, add it to the orders list
        this.orders.push({
          name: itemName,
          quantity: quantity,
          price: menuItem.price,
          total: total
        });
      }
    }
  }

  // Function to remove an ordered item
  removeOrder(itemName: string) {
    const index = this.orders.findIndex(order => order.name === itemName);
    if (index !== -1) {
      this.orders.splice(index, 1);
    }
  }

  // Calculate the total price of all orders
  getTotalPrice(): number {
    return this.orders.reduce((total, order) => total + order.total, 0);
  }
}
