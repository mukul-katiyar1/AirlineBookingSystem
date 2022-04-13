import { MatSnackBar } from '@angular/material/snack-bar';
import { FlightID } from './../models/FlightID';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Flight } from '../models/Flight';

@Component({
  selector: 'app-flight-select',
  templateUrl: './flight-select.component.html',
  styleUrls: ['./flight-select.component.css']
})
export class FlightSelectComponent implements OnInit {

  flights:Flight[];

  constructor(private _snackBar: MatSnackBar,private _router:Router,private customerService:CustomerService) { }

  ngOnInit(): void {

    if(localStorage.getItem("travelDate")==null)
    this._router.navigate(['flightsearch']);

    this.customerService.searchFlightByCustomer(localStorage.getItem("travelDate"),localStorage.getItem("source"),
    localStorage.getItem("destination")).subscribe(data=>{
      this.flights=data;
      console.log(this.flights);
      localStorage.removeItem("travelDate");
      localStorage.removeItem("source");
      localStorage.removeItem("destination");
    })
  }
  
    toMatrix(i){
      if(localStorage.getItem("emailId")==null){
        this.openSnackBar2("please login to continue");
        return ;
      }
      console.log(i);
     
     let   set=JSON.stringify(this.flights[i]);
      localStorage.setItem("flight",set);
      
      this._router.navigate(['seatmatrix']);
    }
    openSnackBar2(message:string) {
      this._snackBar.open(message, "", {
        duration: 2000,
      });
    }

}