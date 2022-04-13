import { CustomerService } from './../services/customer.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  otp:string="";
  constructor(private _router:Router,private customerService:CustomerService) { }

  ngOnInit(): void {
  }
  forward(){
    let myOtp={
      
    }
    myOtp['otp']=this.otp;
    this.customerService.verifyOtp(localStorage.getItem("emailOtp"),myOtp).subscribe((data)=>
    {
      let checker=data;
      if(checker==true){
        this._router.navigate(['changepassword']);
      }
      else{
        alert("Enter Correct otp");
      }
    });
   
  }
 

}
