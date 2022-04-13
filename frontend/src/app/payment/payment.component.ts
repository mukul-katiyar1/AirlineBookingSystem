import { CustomerService } from './../services/customer.service';
import { PassengerDetails } from './../models/PassengerDetails';
import { FlightBooked } from './../models/FlightBooked';
import { BookingDto } from './../models/BookingDto';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/Flight';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  hide=true;
  hide_Container=false;
   value1 = 'Clear me';
   value2 = 'Clear me';
   value3= 'Clear me';
   value4 = 'Clear me';
   flip=false;
   panelOpenState = false;
   constructor(private _router:Router,private customerService:CustomerService) { }
 our=1;
   ngOnInit(): void {
 
     setTimeout(() => 
     {
       this.our=1;
     },
     1000);
    
   }
 
 
   next(){
     this.hide=false;
     this.hide_Container=true;
     setTimeout(() => 
     {
       this.flip=true;
     },
     800);
     let flightBooked:FlightBooked=JSON.parse(localStorage.getItem("flighBooked"));
     let flight:Flight=JSON.parse(localStorage.getItem("flight"));
     let passengerDetails:PassengerDetails=JSON.parse(localStorage.getItem("passengers"));
     
     let lower=localStorage.getItem("newLowerDeck");
     let upper=localStorage.getItem("newUpperDeck");

     let flightBooked2:FlightBooked=JSON.parse(localStorage.getItem("flighBooked2"));
     let flight2:Flight=JSON.parse(localStorage.getItem("flight2"));
     let passengerDetails2:PassengerDetails=JSON.parse(localStorage.getItem("passengers2"));
     
     let lower2=localStorage.getItem("newLowerDeck2");
     let upper2=localStorage.getItem("newUpperDeck2");

     let dto:BookingDto=new BookingDto(flightBooked,passengerDetails,flight.fId,localStorage.getItem("emailId"),lower,upper);
    
     this.customerService.confirmBooking(dto).subscribe((data)=>{
       if(localStorage.getItem("twoWay")!=null){
        let dto2:BookingDto=new BookingDto(flightBooked2,passengerDetails2,flight2.fId,localStorage.getItem("emailId"),lower2,upper2);
        this.customerService.confirmBooking(dto2).subscribe((data)=>{})
       }
      
     });
     setTimeout(() => 
     {
       this._router.navigate(['congratulation']);
     },
     2000);
   }
   
 

}
