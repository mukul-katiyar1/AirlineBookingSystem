import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightBooked } from './../models/FlightBooked';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/Flight';
import { PassengerDetails } from '../models/PassengerDetails';

@Component({
  selector: 'app-passenger-details2',
  templateUrl: './passenger-details2.component.html',
  styleUrls: ['./passenger-details2.component.css']
})
export class PassengerDetails2Component implements OnInit {
  totalPassengers=2;
  genders= [
   {value: 'M', viewValue: 'M'},
   {value: 'F', viewValue: 'F'},
   {value: 'O', viewValue: 'O'}
 ];
 flighBooked:FlightBooked;
   constructor(private _router:Router,private fb:FormBuilder) { }
  
   ngOnInit(): void {
     let flight;
    
       flight=localStorage.getItem("flight2");
    
    
     let flight2:Flight=JSON.parse(flight);
     let date:Date=new Date();
    let time:string= ("0"+date.getHours()).slice(-2)+""+("0"+(date.getMinutes())).slice(-2)+""+("0"+date.getSeconds()).slice(-2);
     let bookingId=flight2.fId.flightNumber+flight2.fId.travelDate+localStorage.getItem("first2")+time;
     localStorage.setItem("bookingId2",bookingId);
    
     this.totalPassengers=parseInt(localStorage.getItem("totalSeats2"));
     let bookingTime:Date = new Date();
     let bookingTime2:string= bookingTime.getFullYear()+"-"+("0"+(bookingTime.getMonth()+1)).slice(-2)+"-"+("0"+bookingTime.getDate()).slice(-2);
     this.flighBooked=new FlightBooked(bookingId,122,bookingTime2,0,0,parseInt(localStorage.getItem("totalSeats2")),"pay",parseInt(localStorage.getItem("totalFare2")));
   }
   passengers=this.fb.group({
     passenger1Name:[''],
     passenger2Name:[''],
     passenger3Name:[''],
     passenger4Name:[''],
     passenger1Sex:['',Validators.required],
     passenger2Sex:['',Validators.required],
     passenger3Sex:['',Validators.required],
     passenger4Sex:['',Validators.required],
     passenger1Age:['',[
      
       Validators.pattern("^[0-9]{2}$")]],
 
     passenger2Age:['',[
      
       Validators.pattern("^[0-9]{2}$")]],
     passenger3Age:['',[
      
       Validators.pattern("^[0-9]{2}$")]],
 
     passenger4Age:['',[
       
       Validators.pattern("^[0-9]{2}$")]]
   })
   payment(){
   
    
    let check=true;
   let passenger1={};
     for (let index = 1; index <=this.totalPassengers; index++) {
         if(index==1){
 
           if(this.passengers.controls.passenger1Sex.errors)  check=false;
           if(this.passengers.controls.passenger1Name.errors)  check=false;
           if(this.passengers.controls.passenger1Age.errors)  check=false;
           
         }
         if(index==2){
           if(this.passengers.controls.passenger2Sex.errors)  check=false;
           if(this.passengers.controls.passenger2Name.errors)  check=false;
           if(this.passengers.controls.passenger2Age.errors)  check=false;
         }
         if(index==3){
           if(this.passengers.controls.passenger3Sex.errors)  check=false;
           if(this.passengers.controls.passenger3Name.errors)  check=false;
           if(this.passengers.controls.passenger3Age.errors)  check=false;
         }
         if(index==4){
           if(this.passengers.controls.passenger4Sex.errors)  check=false;
           if(this.passengers.controls.passenger4Name.errors)  check=false;
           if(this.passengers.controls.passenger4Age.errors)  check=false;
         }
     
     }
    
     if(!check){
       return;
     }
   
     let flight=localStorage.getItem("flight2");
     let flight2:Flight=JSON.parse(flight);
     
     let bookingId=flight2.fId.flightNumber+flight2.fId.travelDate+localStorage.getItem("first2");
     let passengers= new PassengerDetails(bookingId,this.passengers.controls.passenger1Name.value,this.passengers.controls.passenger1Age.value
       ,this.passengers.controls.passenger1Sex.value,parseInt(localStorage.getItem("first2")),this.passengers.controls.passenger2Name.value,this.passengers.controls.passenger2Age.value
       ,this.passengers.controls.passenger2Sex.value,parseInt(localStorage.getItem("second2")),this.passengers.controls.passenger3Name.value,this.passengers.controls.passenger3Age.value
       ,this.passengers.controls.passenger3Sex.value,parseInt(localStorage.getItem("third2")),this.passengers.controls.passenger4Name.value,this.passengers.controls.passenger4Age.value
       ,this.passengers.controls.passenger4Sex.value,parseInt(localStorage.getItem("fourth2")));
       console.log(passengers);
       let passengers2=JSON.stringify(passengers);
       let flightBooked2=JSON.stringify(this.flighBooked);
       localStorage.setItem("passengers2",passengers2);
       localStorage.setItem("flighBooked2",flightBooked2);
       this._router.navigate(['payment']);
   }
 
 
 }