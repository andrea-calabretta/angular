import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validators-email',
  standalone: false,
  template: `
    <h2>Reactive Form con Validazioni</h2>
    <form>
      <label for="nome">Nome:</label>
      <input [formControl]="nomeControl" placeholder="Nome" />
      <div *ngIf="nomeControl.invalid && nomeControl.touched">
        <p *ngIf="nomeControl.errors?.['required']">Il nome è obbligatorio.</p>
        <p *ngIf="nomeControl.errors?.['minlength']">Il nome deve essere lungo almeno 3 caratteri.</p>
      </div>

      <label for="email">Email:</label>
      <input type="email" [formControl]="emailControl" placeholder="Email" class="emailInput" />
      <div *ngIf="emailControl.invalid && emailControl.touched">
        <p *ngIf="emailControl.errors?.['required']">L'email è obbligatoria.</p>
        <p *ngIf="emailControl.errors?.['email']">L'email non è valida.</p>
      </div>

      <p>Nome: {{ nomeControl.value }}</p>
      <p>Email: {{ emailControl.value }}</p>
    </form>
  `,
  styleUrl: './form-validators-email.component.scss'
})
export class FormValidatorsEmailComponent {
  nomeControl = new FormControl('',{
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  })

  emailControl = new FormControl('', {
    validators: [
      Validators.required,
      Validators.email
    ]
  });


}
