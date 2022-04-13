import { FlightID } from './../models/FlightID';
import { AdminService } from './../services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-flight',
  templateUrl: './remove-flight.component.html',
  styleUrls: ['./remove-flight.component.css']
})
export class RemoveFlightComponent implements OnInit {
 flip=true;
 message:any;
  constructor(private fb:FormBuilder,private _router:Router,private _snackBar: MatSnackBar, private adminService: AdminService) { }

  ngOnInit(): void {
  }

  removeFlight=this.fb.group({
    date:['',Validators.required],
    flightNumber:['',Validators.required]
   
  
  });
  removed(){
   //console.log(this.removeFlight.controls.date.value.getMonth());
   let departureDate:Date = this.removeFlight.controls.date.value;
    let travelDate = departureDate.getFullYear()+"-"+("0"+(departureDate.getMonth()+1)).slice(-2)+"-"+("0"+departureDate.getDate()).slice(-2);
    let fId: FlightID=new FlightID(travelDate,this.removeFlight.controls.flightNumber.value); 

    this.adminService.removeFlightByAdmin(fId).subscribe(data=>{
      this.message=data;
      this.openSnackBar(this.message);
    })

    
  }
  openSnackBar(message) {
    this._snackBar.open(message, "", {
      duration: 1000,
      panelClass: ['mat-toolbar', 'mat-warn']
    });
  }
  
  flipper(){
    this.flip=!this.flip;
  }

}
