import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  products = [
    { id: 1, name: 'Tv', price: 100 },
    { id: 2, name: 'PC', price: 200 },
    { id: 3, name: 'Mac', price: 300 },
    { id: 4, name: 'iPhone', price: 400 }
  ];
}
