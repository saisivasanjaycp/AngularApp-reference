import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Offer {
  title: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  offers: Offer[] = [
    { 
      title: '50% Off on Biriyani',
      image: './images/home2.png', 
      description: 'Valid till 31st Dec'
    },
    { 
      title: 'Free Dessert with Veg Combo',
      image: './images/home3.png', 
      description: 'Valid till 31st Dec'
    }
  ];
}
