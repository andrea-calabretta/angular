import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <h2>Benvenuto nella Dashboard</h2>
    <button (click)="logout()">Logout</button>
  `,
})
export class DashboardComponent {
  constructor(@Inject(AuthService) private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
