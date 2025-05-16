import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: false,
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent implements OnInit, OnChanges {
    @Input() titolo!: string;

  constructor() {
    console.log('1. constructor - titolo =', this.titolo); // undefined
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges - titolo cambiato:', changes['titolo']);
  }

  ngOnInit() {
    console.log('3. ngOnInit - titolo =', this.titolo); // valore effettivo
  }

  ngOnDestroy() {
    console.log('4. ngOnDestroy - titolo =', this.titolo); // valore effettivo
  }

}
