import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { confirmPasswordValidator } from '../shared/confirm-password.validator';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatInputModule, ReactiveFormsModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss'
})
export class SignUpPageComponent implements OnInit {
  signUpForm:FormGroup = this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
  },
  { validators: confirmPasswordValidator }
  )
  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    console.log(this.form['confirmPassword']);
    
  }
    get form(){
      return this.signUpForm.controls;
    }

    signUp(){
      
    } 
}
