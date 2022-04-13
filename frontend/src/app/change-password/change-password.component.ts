import { CustomerService } from './../services/customer.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private fb:FormBuilder,private _router:Router,private customerService:CustomerService) { }

  ngOnInit(): void {
  }
  changePass=this.fb.group({
    password:['',[Validators.required, Validators.minLength(8),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    confirmPassword:['',[Validators.required, Validators.minLength(8),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]]
  })

  login(){
    let passwordEntered=this.changePass.controls.password.value;
    let confirmPasswordEntered=this.changePass.controls.confirmPassword.value;
    if(this.changePass.invalid||passwordEntered!=confirmPasswordEntered){
      return;
    }
    console.log(passwordEntered,confirmPasswordEntered);
    this.customerService.updateCustomerPassword(localStorage.getItem("emailOtp"),passwordEntered).subscribe((data)=>{
      console.log(data);
      this._router.navigate(['login']);
    });
   
    
   

  }
  
 

}
