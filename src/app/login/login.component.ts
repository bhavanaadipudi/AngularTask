import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  @Output() loginSuccess: EventEmitter<{ userID: string }> = new EventEmitter<{ userID: string }>();
  loginForm: FormGroup; // Declare the form group

  constructor(private fb: FormBuilder, private route: Router) {
    this.loginForm = this.fb.group({
      userID: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get userID() {
    return this.loginForm.get('userID');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    if (this.loginForm.valid) {
      const userID = this.loginForm.value.userID;
      // Do something with the user ID
      this.route.navigate(['/dashboard']);
    } else {
      alert('please enter valid input fields');
    }
  }
}

  


  

           

