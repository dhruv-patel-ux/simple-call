import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatInputModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm:FormGroup = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })
  constructor(
    private fb: FormBuilder,
    public location: Location
  ){}
    get form(){
      return this.loginForm.controls;
    }

    login(){

    }
    forgotPassword(){

    }
}
