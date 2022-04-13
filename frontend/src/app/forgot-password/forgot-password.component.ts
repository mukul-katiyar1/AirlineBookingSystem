import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from './../services/customer.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private fb:FormBuilder,private _router:Router,private customerService:CustomerService) { }

  ngOnInit(): void {
  }
  forgotPassword=this.fb.group({
    email:['',[
      Validators.required,
      Validators.email]]
    
  })
  forgotButton(){
    let adminEmail=this.forgotPassword.controls.email.value;

    this.forward();
  }
  forward(){
    if(this.forgotPassword.invalid){
      return;
    }
    this.customerService.sendOtp(this.forgotPassword.controls.email.value).subscribe((data)=>{
      let bool=data;
      console.log(typeof bool);
      if(bool==true){
        this._router.navigate(['otp']);
        localStorage.setItem("emailOtp",this.forgotPassword.controls.email.value)
      }
      else{
        this.openSnackBar2("Email not registered")
      }
    });
    
  }

  openSnackBar2(message:string) {
    this._snackBar.open(message, "", {
      duration: 2000,
    });
  }
 
  

}
