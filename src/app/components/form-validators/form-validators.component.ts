import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validators',
  standalone: false,
  template: `
    <h2>Reactive Form con Validazioni</h2>

    <form>
      <input [formControl]="nomeControl" placeholder="Nome" />
      <div *ngIf="nomeControl.invalid && nomeControl.touched">
        <p *ngIf="nomeControl.errors?.['required']">Il nome è obbligatorio.</p>
        <p *ngIf="nomeControl.errors?.['minlength']">Il nome deve essere lungo almeno 3 caratteri.</p>
      </div>
      <p>Nome: {{ nomeControl.value }}</p>
    </form>

    `,
  styleUrl: './form-validators.component.scss'
})
export class FormValidatorsComponent {
  nomeControl = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  });

}
