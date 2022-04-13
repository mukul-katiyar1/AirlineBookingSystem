import { CustomerService } from './../services/customer.service';
import { Customer } from './../models/Customer';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  panelOpenState = false;
  name="sid"
  isLinear = true;
  foods= [
    {value: 'mr', viewValue: 'Mr'},
    {value: 'miss', viewValue: 'Miss'},
    {value: 'mrs', viewValue: 'Mrs'}
  ];
  constructor(private fb:FormBuilder,private _router:Router,private _customerService:CustomerService) { }

  ngOnInit(): void {
  }
  formGroup1=this.fb.group({
    title:['',Validators.required],
    firstname:['',Validators.required],
    lastname:[''],
    dateOfBirth:['',Validators.required]

 });
  
  formGroup2=this.fb.group({
    phoneNumber:['',[
      Validators.required,
      Validators.pattern("^[0-9]{10}$")]],
    email:['',[
      Validators.required,
      Validators.email]],
    password:['',[Validators.required, Validators.minLength(8),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    confirmPassword:['',Validators.required]
  });

  forward(){
    let dateOfBirth:Date = this.formGroup1.controls.dateOfBirth.value;
    let dateOfBirth2:string= dateOfBirth.getFullYear()+"-"+("0"+(dateOfBirth.getMonth()+1)).slice(-2)+"-"+("0"+dateOfBirth.getDate()).slice(-2);
   
    if(this.formGroup2.invalid){
      return ;
    }
    if(this.formGroup2.controls.password.value!=this.formGroup2.controls.confirmPassword.value){
      return ;
    }
    let newCustomer=new Customer(this.formGroup1.controls.title.value,this.formGroup1.controls.firstname.value,
      this.formGroup1.controls.lastname.value,dateOfBirth2,"+91"+this.formGroup2.controls.phoneNumber.value,
      this.formGroup2.controls.email.value,this.formGroup2.controls.password.value);
      console.log(newCustomer);
      this._customerService.createCustomer(newCustomer).subscribe(data=>{
        console.log(data);
      })
    this._router.navigate(['login']);

  }

}
