import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../common/api-service/api-service.service';
import { SnackbarService } from '../common/models/snekbar.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatInputModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm:FormGroup = this.fb.group({
    username:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })
  constructor(
    private fb: FormBuilder,
    public location: Location,
    private router: Router,
    private apiService: ApiService,
    private snackBarService: SnackbarService
  ){}
    get form(){
      return this.loginForm.controls;
    }

    login(){
      this.loginForm.markAllAsTouched();
      if(this.loginForm.invalid){
        return
      }
      this.apiService.login(this.loginForm.value).subscribe(
        (res: any) =>{
          if(res.success){

            localStorage.setItem('ACCESS_TOKEN',res.accessToken)
            localStorage.setItem('USER',res.data)
            this.snackBarService.openSuccessSnackBar(res.message);  
            this.router.navigate(['main']);
          }else{
            this.snackBarService.openErrorSnackBar(res.message)
          }

        },
        (error: any)=>{
          this.snackBarService.openSuccessSnackBar(error.message);  
        }
      )
      
    }
    forgotPassword(){

    }
}
