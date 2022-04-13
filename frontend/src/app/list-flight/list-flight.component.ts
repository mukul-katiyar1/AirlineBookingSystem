import { AdminService } from './../services/admin.service';
import { Flight } from './../models/Flight';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-flight',
  templateUrl: './list-flight.component.html',
  styleUrls: ['./list-flight.component.css']
})
export class ListFlightComponent implements OnInit {
  flip=true;
  flights:Flight[];
    constructor(private adminService:AdminService) { }
    ngOnInit(): void {
      this.adminService.viewAllFlightsByAdmin().subscribe(data=>{
        this.flights=data;
        console.log(this.flights);
      })
    }
    flipper(){
      this.flip=!this.flip;
    }
   
  }