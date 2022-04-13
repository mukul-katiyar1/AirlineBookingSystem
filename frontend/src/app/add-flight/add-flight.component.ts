import { AdminService } from './../services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FlightID } from '../models/FlightID';
import { Flight } from '../models/Flight';


@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  fullName;
  test;
  selected:string="";
  foods= [
    {value: 'BANGALORE', viewValue: 'Bangalore'},
    {value: 'DELHI', viewValue: 'Delhi'},
    {value: 'MUMBAI', viewValue: 'Mumbai'},
    {value: 'CHENNAI', viewValue: 'Chennai'},
    {value: 'PUNE', viewValue: 'Pune'},
    {value: 'HYDERABAD', viewValue: 'Hyderabad'},
    {value: 'PATNA', viewValue: 'Patna'},
    {value: 'KOLKATA', viewValue: 'Kolkata'}
  ];
  flip=true;
  message:any;

  constructor(private fb:FormBuilder,private _router:Router,private _snackBar: MatSnackBar, private adminService: AdminService) { }

  ngOnInit(): void {
    console.log((this.selected.length))
  }
  list(val){
    console.log(val);
  }
  addFlightForm=this.fb.group({
    flightNumber:['',Validators.required],
    baseFare:['',Validators.required],
    source:['',Validators.required],
    destination:['',Validators.required],
    departureDate:['',Validators.required],
    arrivalDate:['',Validators.required],
    returnDate:['',Validators.required],
    departureTime:['',[
      Validators.required,
      Validators.pattern("^([0-1][0-9]|[2][0-3]):([0-5][0-9])$")]],
    arrivalTime:['',[
      Validators.required,
      Validators.pattern("^([0-1][0-9]|[2][0-3]):([0-5][0-9])$")]
    ]
    
  })
  forward(){
    if(this.addFlightForm.invalid){
      return ;
    }
   
   
    const options= {
      day:"2-digit",year:"numeric",month:"2-digit"
    }
  
    let departureDate:Date = this.addFlightForm.controls.departureDate.value;
    let travelDate = departureDate.getFullYear()+"-"+("0"+(departureDate.getMonth()+1)).slice(-2)+"-"+("0"+departureDate.getDate()).slice(-2);

    let arrivalDate:Date = this.addFlightForm.controls.arrivalDate.value;
    let destinationArrivalDate = arrivalDate.getFullYear()+"-"+("0"+(arrivalDate.getMonth()+1)).slice(-2)+"-"+("0"+arrivalDate.getDate()).slice(-2);

  

    let returnDate:Date = this.addFlightForm.controls.returnDate.value;
    let returnDate2 = returnDate.getFullYear()+"-"+("0"+(returnDate.getMonth()+1)).slice(-2)+"-"+("0"+returnDate.getDate()).slice(-2);

   if((!this.dateChecker(departureDate,arrivalDate))||(!this.dateChecker(arrivalDate,returnDate))){
    this.openSnackBar("Enter Date Correctly")
    return ;
   }
   if(this.addFlightForm.controls.source.value==this.addFlightForm.controls.destination.value){
     return ;
   }

    let fId: FlightID = new FlightID(travelDate,this.addFlightForm.controls.flightNumber.value);
    let flight: Flight = new Flight(fId,this.addFlightForm.controls.source.value,this.addFlightForm.controls.destination.value,returnDate2,destinationArrivalDate,this.addFlightForm.controls.arrivalTime.value,this.addFlightForm.controls.departureTime.value,this.addFlightForm.controls.baseFare.value);
    console.log(flight);
    this.adminService.addFlightByAdmin(flight).subscribe(data=>{
      this.message=data;
      this.openSnackBar(this.message);
      window.location.reload();
    })
    
   
}
dateChecker(beforeDate:Date,afterDate:Date):boolean{
 
 let before1:string = beforeDate.getFullYear()+"-"+("0"+(beforeDate.getMonth()+1)).slice(-2)+"-"+("0"+beforeDate.getDate()).slice(-2);
 let  year1:number=((beforeDate.getFullYear()));
 let year2:number=afterDate.getFullYear();
 let month1:number=beforeDate.getMonth();
 let month2:number=afterDate.getMonth();
 let day1:number=beforeDate.getDay();
 let day2:number=afterDate.getDay();
 let flag=false;
 if(year1>year2) flag=true;

 if(year1==year2&&month1>month2) flag=true;

 if(year1==year2&&month1==month2&&day1>day2) flag=true;

 if(flag) return false;

 else return true;

 return true;
}

flipper(){
  this.flip=!this.flip;
}
openSnackBar(message) {
  this._snackBar.open(message, "", {
    duration: 1000,
    panelClass: ['mat-toolbar']
  });
}

}
