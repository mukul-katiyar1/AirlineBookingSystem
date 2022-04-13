import { AdminService } from './../services/admin.service';
import { FlightBooked } from './../models/FlightBooked';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-flight-booked',
  templateUrl: './view-flight-booked.component.html',
  styleUrls: ['./view-flight-booked.component.css']
})
export class ViewFlightBookedComponent implements OnInit {
 flip=true
 flightBooked:FlightBooked[];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.viewAllFlightBookedByAdmin().subscribe((data)=>{
      this.flightBooked=data;
      console.log(this.flightBooked)
    })
  }
  flipper(){
    this.flip=!this.flip;
  }

}
