import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combined-forgot-otp',
  templateUrl: './combined-forgot-otp.component.html',
  styleUrls: ['./combined-forgot-otp.component.css']
})
export class CombinedForgotOtpComponent implements OnInit {
test=true;
first=[0,0,1,0,0]
second=[0,0,0,1,0]
third=[0,0,0,0,2]
  constructor() { }

  ngOnInit(): void {
  }
 fu(){
   this.test=false;
 }
 fu2(){

 }

}
