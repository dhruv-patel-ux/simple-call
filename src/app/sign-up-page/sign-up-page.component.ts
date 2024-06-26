import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { confirmPasswordValidator } from '../shared/confirm-password.validator';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

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
  { validators: this.passwordMatchValidator }
  )
  constructor(
    private fb: FormBuilder
  ){}
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    console.log(this.form['confirmPassword']);
    
  }
    get form(){
      return this.signUpForm.controls;
    }

    signUp(){
      
    } 
    
  passwordMatchValidator(g: FormGroup) {
    const passwordControl = g?.get('password');
    const confirmPasswordControl = g?.get('confirmPassword');
    
    if (passwordControl && confirmPasswordControl) {
      return passwordControl.value === confirmPasswordControl.value ? null : { mismatch: true };
    } else {
      return { mismatch: true };
    }
  }
}
