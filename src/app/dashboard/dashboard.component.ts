import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Input() userID: string ;

 
  collection: string[];

  constructor() {
    this.collection = ['bhavana', 'lokesh', 'adipudi'];
    this.userID= '';
  }
}
