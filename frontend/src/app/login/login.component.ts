import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Admin} from '../models/Admin';
import {Customer} from '../models/Customer';
import { AdminService } from '../services/admin.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  value = '';
  value2='';
  show;
  selected_index=1;
  adminLoginStatus:any;
  userLoginStatus:any;
  

  constructor(private fb:FormBuilder,private _router:Router,private _snackBar: MatSnackBar,private adminService: AdminService,private customerService: CustomerService) { }

  ngOnInit(): void {
    if(localStorage.getItem("userName")!=null)
    this._router.navigate(['admingrid']);
    else if(localStorage.getItem("emailId")!=null)
    this._router.navigate(['usergrid']);
  }
 
  userLogin=this.fb.group({
    email:['',[
      Validators.required,
   Validators.email]],
   password:['',
   [Validators.required, Validators.minLength(8),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]]
 })
  
  userButton(){
  
    if(this.userLogin.invalid){
      return this.openSnackBar();
    }

    if(this.selected_index==1){

      let emailId = this.userLogin.controls.email.value;
      let password = this.userLogin.controls.password.value;

      this.customerService.loginAuthenticator(emailId,password).subscribe(data=> {
      
        this.userLoginStatus = data;
      
        if(this.userLoginStatus=='Success'){
        
          localStorage.setItem("emailId",this.userLogin.controls.email.value);
          
          this._router.navigate(['usergrid']);}
        else
        this.openSnackBar2(this.userLoginStatus);
      });
      
    }

    else{
      let userName = this.userLogin.controls.email.value;
      let password = this.userLogin.controls.password.value;

      let admin = new Admin(userName,password);

      this.adminService.loginAuthenticator(admin).subscribe(data=> {
        this.adminLoginStatus = data;
        if(this.adminLoginStatus=='Success'){
        
          localStorage.setItem("userName",userName);
          this._router.navigate(['admingrid']);}
        else
        this.openSnackBar2(this.adminLoginStatus);
      });

    }

    
  }
 

  openSnackBar() {
    this._snackBar.open("enter valid email and password or register", "", {
      duration: 1000,
    });
  }
  openSnackBar2(message:string) {
    this._snackBar.open(message, "", {
      duration: 2000,
    });
  }
changeIndex(){
  this.selected_index=this.selected_index^1;
}

}