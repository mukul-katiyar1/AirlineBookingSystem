import { FlightBooked } from './../models/FlightBooked';
import { PassengerDetails } from './../models/PassengerDetails';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/Flight';

@Component({
  selector: 'app-passengers-details',
  templateUrl: './passengers-details.component.html',
  styleUrls: ['./passengers-details.component.css']
})
export class PassengersDetailsComponent implements OnInit {
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
   
      flight=localStorage.getItem("flight");
   
   
    let flight2:Flight=JSON.parse(flight);
    let date:Date=new Date();
    let time:string= ("0"+date.getHours()).slice(-2)+""+("0"+(date.getMinutes())).slice(-2)+""+("0"+date.getSeconds()).slice(-2);
    let bookingId=flight2.fId.flightNumber+flight2.fId.travelDate+localStorage.getItem("first")+time;
    localStorage.setItem("bookingId",bookingId);
   
    this.totalPassengers=parseInt(localStorage.getItem("totalSeats"));
    let bookingTime:Date = new Date();
    let bookingTime2:string= bookingTime.getFullYear()+"-"+("0"+(bookingTime.getMonth()+1)).slice(-2)+"-"+("0"+bookingTime.getDate()).slice(-2);
    this.flighBooked=new FlightBooked(bookingId,122,bookingTime2,0,0,parseInt(localStorage.getItem("totalSeats")),"pay",parseInt(localStorage.getItem("totalFare")));
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
  
    let flight=localStorage.getItem("flight");
    let flight2:Flight=JSON.parse(flight);
    
    let bookingId=flight2.fId.flightNumber+flight2.fId.travelDate+localStorage.getItem("first");
    let passengers= new PassengerDetails(bookingId,this.passengers.controls.passenger1Name.value,this.passengers.controls.passenger1Age.value
      ,this.passengers.controls.passenger1Sex.value,parseInt(localStorage.getItem("first")),this.passengers.controls.passenger2Name.value,this.passengers.controls.passenger2Age.value
      ,this.passengers.controls.passenger2Sex.value,parseInt(localStorage.getItem("second")),this.passengers.controls.passenger3Name.value,this.passengers.controls.passenger3Age.value
      ,this.passengers.controls.passenger3Sex.value,parseInt(localStorage.getItem("third")),this.passengers.controls.passenger4Name.value,this.passengers.controls.passenger4Age.value
      ,this.passengers.controls.passenger4Sex.value,parseInt(localStorage.getItem("fourth")));
      console.log(passengers);
      let passengers2=JSON.stringify(passengers);
      let flightBooked2=JSON.stringify(this.flighBooked);
      localStorage.setItem("passengers",passengers2);
      localStorage.setItem("flighBooked",flightBooked2);
      if(localStorage.getItem("twoWay")!=null){
        this._router.navigate(['seatmatrix2']);
      }
      else
      {
        
        this._router.navigate(['payment']);
      }
  }


}