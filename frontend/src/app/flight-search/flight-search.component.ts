import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  fullName;
  test;

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
  constructor(private _router:Router,private fb:FormBuilder,private _snackBar: MatSnackBar) { }
  searchFlight=this.fb.group({
    from:['',Validators.required],
    to:['',Validators.required],
    travelDate:['',Validators.required],
    returnDate:['']

  
  });
  ngOnInit(): void {
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
    console.log("function flaggg is ",flag);
    if(flag==true) return false;
   
    else return true;
   
    return true;
   }

  fu(){
    this.test=this.fullName.getDate();
    console.log(this.test);

  }

  forward(){
    this._router.navigate(['twowayflight']);
  }
  my(){
    console.log("this");
  }
  singleFlight(){

  }
  eco(){
    console.log("eco");
    console.log(this.fullName)

  }
  busi(){
    console.log("busi ")

  }

  
  search(){
    if(this.searchFlight.controls.from.value==this.searchFlight.controls.to.value){
      this.openSnackBar("Enter Source and Destination Correctly")
       return ;
     }
    let departureDate:Date = this.searchFlight.controls.travelDate.value;
    let travelDate = departureDate.getFullYear()+"-"+("0"+(departureDate.getMonth()+1)).slice(-2)+"-"+("0"+departureDate.getDate()).slice(-2);
    let source= this.searchFlight.controls.from.value;
    let destination = this.searchFlight.controls.to.value;
    
     
  
    
    localStorage.setItem("travelDate",travelDate);
    localStorage.setItem("source",source);
    localStorage.setItem("destination",destination);
    console.log(typeof this.searchFlight.controls.returnDate.value.getMonth,"svdv");
     if(this.searchFlight.controls.returnDate.value.getMonth!=null){
       //localStorage.setItem("twoWay")
       console.log("falgdfbf");
      let departureDate:Date = this.searchFlight.controls.returnDate.value;
      let returnDate = departureDate.getFullYear()+"-"+("0"+(departureDate.getMonth()+1)).slice(-2)+"-"+("0"+departureDate.getDate()).slice(-2);
      let thh=this.dateChecker(departureDate,this.searchFlight.controls.returnDate.value);
      
      if(!this.dateChecker(this.searchFlight.controls.travelDate.value,this.searchFlight.controls.returnDate.value)){
        this.openSnackBar("Enter Date Correctly")
        console.log("rgg");
        return ;
       }
      
      localStorage.setItem("returnDate",returnDate);
       this._router.navigate(['twowayflight']);
       return ;
     }
    this._router.navigate(['flighselect']);

  }
  openSnackBar(message) {
    this._snackBar.open(message, "", {
      duration: 1000,
      panelClass: ['mat-toolbar']
    });
  }
 

}