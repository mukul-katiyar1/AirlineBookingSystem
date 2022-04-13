import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congratulation',
  templateUrl: './congratulation.component.html',
  styleUrls: ['./congratulation.component.css']
})
export class CongratulationComponent implements OnInit {
  flip=true;
  hide=true;
  reduce=false;
  constructor(private _router:Router) {
   }

  ngOnInit(): void {
    setTimeout(() => 
    {
      this.flip=false;
    },
    0);
  }
  proceed(){
    this.hide=false;
    this.reduce=true;
  }

  

}
