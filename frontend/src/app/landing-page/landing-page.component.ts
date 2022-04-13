import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  home(){
    this._router.navigate(['landingpage']);
  }
  
  login(){
    this._router.navigate(['login']);
  }

  register(){
    this._router.navigate(['register']);
  }
  book(){
    this._router.navigate(['flightsearch']);

  }

  userHome(){
    this._router.navigate(['usergrid']);

  }
  learnMore(){
    this._router.navigate(['learnmore']);

  }

}
