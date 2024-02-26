import { DecimalPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [DecimalPipe,RouterLink],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  total = computed(()=> this.cartService.cart().total);
  count = computed(()=> this.cartService.cart().count);
  constructor(private cartService:CartService){

  }
}
