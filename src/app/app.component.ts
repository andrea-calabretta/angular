import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'intro_ng_module';

  show = true;

  toggle() {
    this.show = !this.show;
  }


}
