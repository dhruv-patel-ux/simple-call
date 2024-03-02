import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { confirmPasswordValidator } from '../shared/confirm-password.validator';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ApiService } from '../common/api-service/api-service.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../common/models/snekbar.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatInputModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss'
})
export class SignUpPageComponent implements OnInit {

  signUpForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  },
    { validators: this.passwordMatchValidator }
  )
  constructor(
    private fb: FormBuilder,
    public location: Location,
    private snackBarService: SnackbarService, 
    private apiService: ApiService,
    private router: Router
  ) { }
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }
  get form() {
    return this.signUpForm.controls;
  }

  submit = false;
  signUp() {
    this.signUpForm.markAllAsTouched();
    if (this.signUpForm.value.password != this.signUpForm.value.confirmPassword) {
      this.submit = true
      this.snackBarService.openErrorSnackBar("Password Not Match")
      return
    }
    this.apiService.signup(this.signUpForm.value).subscribe(
      (res:any)=>{
      if(res.status){
        localStorage.setItem('ACCESS_TOKEN',res.accessToken)
        localStorage.setItem('USER',res.data)
        this.snackBarService.openSuccessSnackBar(res.message);
        this.router.navigate(['main']);
      }else{
        this.snackBarService.openErrorSnackBar(res.message);
      }
    },(error: any) =>{
      this.snackBarService.openErrorSnackBar(error.message);
    });
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
