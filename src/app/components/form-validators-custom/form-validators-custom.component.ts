import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-form-validators-custom',
  standalone: false,
  templateUrl: './form-validators-custom.component.html',
  styleUrl: './form-validators-custom.component.scss'
})
export class FormValidatorsCustomComponent {
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
    this.gmailValidator,
    this.onlyLettersBeforeAt
  ]);

  // ✅ Validatore 1: deve finire con @gmail.com
  gmailValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    if (email && !email.endsWith('@gmail.com')) {
      return { gmail: true };
    }
    return null;
  }

  // ✅ Validatore 2: parte prima di @ deve contenere solo lettere
  onlyLettersBeforeAt(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    if (email) {
      const parts = email.split('@');
      if (parts.length > 1) {
        const localPart = parts[0];
        const onlyLettersRegex = /^[a-zA-Z]+$/;
        if (!onlyLettersRegex.test(localPart)) {
          return { onlyLetters: true };
        }
      }
    }
    return null;
  }
}



