import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from './../services/customer.service';
import { Flight } from './../models/Flight';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-fligh-list',
  templateUrl: './two-way-fligh-list.component.html',
  styleUrls: ['./two-way-fligh-list.component.css']
})
export class TwoWayFlighListComponent implements OnInit {
  left_index=-1;
  right_index=-1;
  forward_flight:number[];
  return_flight:number[];
  left_color=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  right_color=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  flight1:Flight[];
  flight2:Flight[];
  constructor(private _snackBar: MatSnackBar,private _router:Router,private customerService:CustomerService) { }
  
  ngOnInit(): void {
    this.customerService.searchFlightByCustomer(localStorage.getItem("travelDate"),localStorage.getItem("source"),
    localStorage.getItem("destination")).subscribe(data=>{
      this.flight1=data;
      console.log(this.flight1,"  this si flight `1");
      this.customerService.searchFlightByCustomer(localStorage.getItem("returnDate"),localStorage.getItem("destination"),
      localStorage.getItem("source")).subscribe(data=>{
        this.flight2=data;
        console.log(this.flight2,"   flight 2");
      
      
  
      })
     

    })
   
  }
 

    forwardFlight(index){
      
      if(this.left_index==-1){
        this.left_index=index;
        this.left_color[this.left_index]=1;
      }
      else{
        this.left_color[this.left_index]=0;
        this.left_index=index;
        this.left_color[this.left_index]=1;
      }
    }

    returnFlight(index){
      if(this.right_index==-1){
        this.right_index=index;
        this.right_color[this.right_index]=1;
      }
      else{
        this.right_color[this.right_index]=0;
        this.right_index=index;
        this.right_color[this.right_index]=1;
      }

    }

    toSeatMatrix(){
      if(localStorage.getItem("emailId")==null){
        this.openSnackBar("please login to continue");
        return ;
      }
      if(this.left_index==-1||this.right_index==-1){
        return ;
      }
      let  set=JSON.stringify(this.flight1[this.left_index]);
      localStorage.setItem("flight",set);
      set=JSON.stringify(this.flight2[this.right_index]);
      localStorage.setItem("flight2",set);
      localStorage.setItem("twoWay","1");
      this._router.navigate(['seatmatrix']);

    }
    openSnackBar(message:string) {
      this._snackBar.open(message, "", {
        duration: 2000,
      });
    }
 
}

