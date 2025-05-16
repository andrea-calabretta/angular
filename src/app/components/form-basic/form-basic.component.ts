import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-basic',
  standalone: false,
  template: `

    <h2>Reactive Form</h2>
    <input [formControl] ="nomeControl" placeholder="Nome">
    <p>Nome: {{ nomeControl.value }}</p>

  `,
  styleUrl: './form-basic.component.scss'
})
export class FormBasicComponent {
  nomeControl = new FormControl('');


}
