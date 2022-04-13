import { Flight } from './../models/Flight';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-matrix',
  templateUrl: './seat-matrix.component.html',
  styleUrls: ['./seat-matrix.component.css']
})
export class SeatMatrixComponent implements OnInit {
  total=1;
 base_cost=2000
  current=0;
  current_cost=0;
  new=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  old=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  lowerDeck:number=32;
  upperDeck:number=32;
  goForward=true;
  constructor(private _router:Router) { }

  ngOnInit(): void {
    
    localStorage.removeItem("newlowerDeck");
    localStorage.removeItem("newUpperDeck");
    localStorage.removeItem("totalSeats");
    localStorage.removeItem("first");
    localStorage.removeItem("second");
    localStorage.removeItem("third");
    localStorage.removeItem("fourth");
    let flight=localStorage.getItem("flight");
    let flight2:Flight=JSON.parse(flight);
    this.upperDeck=flight2.upper;
    this.lowerDeck=flight2.lower;
    this.base_cost=flight2.baseFare;
    for (let index = 0; index < 24; index++) {
      if(this.lowerDeck&(1<<index)){
        this.old[index]=1;
        this.new[index]=1;
      }
      else{
        this.old[index]=0;
        this.new[index]=0;
      }
      
    }
    for (let index = 0; index < 24; index++) {
      if(this.upperDeck&(1<<index)){
        this.old[index+24]=1;
        this.new[index+24]=1;
      }
      else{
        this.old[index+24]=0;
        this.new[index+24]=0;
      }
      
    }

  }

  checker(){
    if(this.current<=0) {
      this.goForward=true;
    }
    else{
      this.goForward=false;
    }
  }
change(n){
 
  if(this.old[n]==1) return;
  if(this.new[n]==1){
    this.current--;
    this.new[n]=0;
    if(n<=11){
      this.current_cost-=(this.base_cost*2);
    }
    else
     {this.current_cost-=this.base_cost;
     }
    this.checker();
  }
  else{
    if(this.current==4) return;
    this.current++;
    if(n<=11){
      this.current_cost+=(this.base_cost*2);
    }
    else
     {this.current_cost+=this.base_cost;
     }
    this.new[n]=1;
    this.checker();
  }
  

}
pay(){
  let newLowerDeck=0;
  let newUpperDeck=0;
 let seatCount=0;
 for (let index = 0; index < 48; index++) {
   if(this.new[index]==1){
    if(index>23){
      newUpperDeck=(newUpperDeck|(1<<(index-24)));
    }
    else{
      newLowerDeck=(newLowerDeck|(1<<(index)));
      console.log('new',index);
      console.log('newlower',newLowerDeck);
    }
   }
  if(this.old[index]^this.new[index]){
    seatCount++;
    console.log(index+1);
    if(seatCount==1) localStorage.setItem("first",(index+1).toString());
    if(seatCount==2) localStorage.setItem("second",(index+1).toString());
    if(seatCount==3) localStorage.setItem("third",(index+1).toString());
    if(seatCount==4) localStorage.setItem("fourth",(index+1).toString());
  }
 
}

localStorage.setItem("newUpperDeck",newUpperDeck.toString());
localStorage.setItem("newLowerDeck",newLowerDeck.toString());
 localStorage.setItem("totalSeats",seatCount.toString());
 localStorage.setItem("totalFare",this.current_cost.toString());
 console.log(seatCount);
console.log("empy.", localStorage.getItem('fourth')==null);
  this._router.navigate(['passengerdetails']);

}


}