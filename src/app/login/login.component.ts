import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userID: string;
  password: string;
  @Output() loginSuccess: EventEmitter<{ userID: string }> = new EventEmitter<{ userID: string }>();


  constructor() {

    this.userID = '';
    this.password = '';

  }

  login() {
    if (this.userID && this.password) {
      this.loginSuccess.emit({ userID: this.userID });
    } else {
      alert("Tried to Login");
    }
  }
}
           

