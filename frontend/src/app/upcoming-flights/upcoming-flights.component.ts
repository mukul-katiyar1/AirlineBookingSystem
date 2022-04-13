import { PassengerDetails } from './../models/PassengerDetails';
import { CustomerService } from './../services/customer.service';
import { FlightBooked } from './../models/FlightBooked';
import { ConfirmDeleteComponent } from './../confirm-delete/confirm-delete.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-upcoming-flights',
  templateUrl: './upcoming-flights.component.html',
  styleUrls: ['./upcoming-flights.component.css']
})
export class UpcomingFlightsComponent implements OnInit {
  flip=true
  flightBooked:FlightBooked[];
  constructor(public dialog:MatDialog,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.viewUpcomingFlightsByCustomer(localStorage.getItem("emailId")).subscribe((data)=>{
      this.flightBooked=data;
      console.log(this.flightBooked);
    })

  }
  flipper(){
    this.flip=!this.flip;
  }


  removeFlight(index){
    let myFb:FlightBooked=this.flightBooked[index];
    console.log(myFb);
    localStorage.setItem("myFb",JSON.stringify(myFb))
    console.log(index);
   
    let returning=null;
    let dialogRef=this.dialog.open(ConfirmDeleteComponent);
    dialogRef.afterClosed().subscribe(result=>{
      returning=result;
     if(returning=="true"){
       console.log("gfgf");
       console.log(myFb);
       this.customerService.cancelFlightByCustomer(myFb.bookingId).subscribe(()=>{
        window.location.reload();
      });
         
     }
    })
  }


}
