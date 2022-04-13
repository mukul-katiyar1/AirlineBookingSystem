import { FlightBooked } from './../models/FlightBooked';
import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  flip=true
  flights:FlightBooked[];
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  this.customerService.viewFlightHistoryByCustomer(localStorage.getItem("emailId")).subscribe((data)=>{
    this.flights=data;
    console.log(this.flights);
  })
  }
  flipper(){
    this.flip=!this.flip;
  }
 

}
