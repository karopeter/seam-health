import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      userData:  formBuilder.group({
        username: ['Max', Validators.required],
        password: ['', Validators.required]
      }),
    });
   }

  ngOnInit(): void {
  }


  onSubmit(): void {
    console.log(this.myForm);
  }
}
