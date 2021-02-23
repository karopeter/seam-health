import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user = {
    firstName: 'Moe',
    lastName: 'Joe',
    emailAddress: 'moe@joe.io',
    username: 'MoeJoe',
    password: '12345',
    confirmPassword: '12345'
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
     console.log(this.user);
  }

}
