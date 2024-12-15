import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  type: string;
  image: string;
  price: number;
  offer: string;
  quantity: number; // Add quantity property for managing order count
}

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
 menu=[
    { name: 'Paneer Butter Masala', type: 'veg', image: './images/pannerbutter.png', price: 250, offer: '10% Off', quantity: 0 },
  { name: 'Vegetable Biryani', type: 'veg', image: './images/vegbiriyani.png', price: 200, offer: '15% Off', quantity: 0 },
  { name: 'Dal Tadka', type: 'veg', image: './images/daltadka.png', price: 180, offer: '20% Off', quantity: 0 },
  { name: 'Palak Paneer', type: 'veg', image: './images/palakpaneer.png', price: 220, offer: '10% Off', quantity: 0 },
  { name: 'Aloo Gobi', type: 'veg', image: './images/aloogobi.png', price: 160, offer: '10% Off', quantity: 0 },
  { name: 'Chana Masala', type: 'veg', image: './images/chanamasala.png', price: 180, offer: '15% Off', quantity: 0 },
  { name: 'Chicken Curry', type: 'non-veg', image: './images/ckncurry.png', price: 300, offer: '20% Off', quantity: 0 },
  { name: 'Mutton Biryani', type: 'non-veg', image: './images/mtnbiriyani.png', price: 400, offer: '10% Off', quantity: 0 },
  { name: 'Fish Curry', type: 'non-veg', image: './images/fishcury.png', price: 350, offer: '15% Off', quantity: 0 },
  { name: 'Butter Chicken', type: 'non-veg', image: './images/btrckn.png', price: 320, offer: '10% Off', quantity: 0 },
  { name: 'Prawns Masala', type: 'non-veg', image: './images/pwnmsl.png', price: 380, offer: '10% Off', quantity: 0},
  { name: 'Egg Curry', type: 'non-veg', image: './images/eggcury.png', price: 250, offer: '10% Off', quantity: 0 },

    // Add more items as needed
  ];

  filteredMenu = [...this.menu];

  // Filter menu items based on type
  filterMenu(type: string) {
    if (type === 'veg') {
      this.filteredMenu = this.menu.filter(item => item.type === 'veg');
    } else if (type === 'non-veg') {
      this.filteredMenu = this.menu.filter(item => item.type === 'non-veg');
    } else {
      this.filteredMenu = [...this.menu];
    }
  }


  // Increase quantity
  increaseQuantity(item: any) {
    item.quantity++;
  }

  // Decrease quantity
  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  // Order item (basic functionality)
  orderItem(itemName: string) {
    alert(`You have ordered: ${itemName}`);
  }
}
