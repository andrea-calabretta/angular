import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receive-params',
  standalone: false,
  templateUrl: './receive-params.component.html',
  styleUrl: './receive-params.component.scss'
})
export class ReceiveParamsComponent {
  id: string = '';

  constructor(private route: ActivatedRoute) {}


      //http://localhost:4200/receive?id=42

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log('ID ricevuto:', this.id);
    });
  }

    //http://localhost:4200/receive/42

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.id = params['id'];
  //     console.log('ID ricevuto:', this.id);
  //   });
  // }

}
