import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Output() purchase = new EventEmitter<string>();
  @Input() user!: { name: string; age: number } | null;

  onPurchase() {
    this.purchase.emit('Product purchased!');
  }
}
