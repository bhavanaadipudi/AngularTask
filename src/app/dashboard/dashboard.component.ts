import { Component } from '@angular/core';
import { NgModel} from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
          names : string[] =['bhavana','adipudi','navya']
}
