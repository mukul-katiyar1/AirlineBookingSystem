import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  removeFlight(){
    this._router.navigate(['addflight']);
  }
  addFlight(){
    this._router.navigate(['removeflight']);
  }
  home(){
    this._router.navigate(['']);
  }
  
  login(){
    this._router.navigate(['login']);
  }
  
  registration(){
    this._router.navigate(['register']);
  }
  flight(){
    this._router.navigate(['flightsearch']);
  
  }

}
