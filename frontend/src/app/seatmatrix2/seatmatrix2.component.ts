import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/Flight';

@Component({
  selector: 'app-seatmatrix2',
  templateUrl: './seatmatrix2.component.html',
  styleUrls: ['./seatmatrix2.component.css']
})
export class Seatmatrix2Component implements OnInit {
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
    localStorage.removeItem("newlowerDeck2");
    localStorage.removeItem("newUpperDeck2");
    localStorage.removeItem("totalSeats2");
    localStorage.removeItem("first2");
    localStorage.removeItem("second2");
    localStorage.removeItem("third2");
    localStorage.removeItem("fourth2");
    let flight=localStorage.getItem("flight2");
    let flight2:Flight=JSON.parse(flight);
    
    let flight3=localStorage.getItem("flight");
    let flight4:Flight=JSON.parse(flight3);

    this.upperDeck=flight2.upper;
    this.lowerDeck=flight2.lower;
    this.base_cost=flight2.baseFare+flight4.baseFare;
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
      if(seatCount==1) localStorage.setItem("first2",(index+1).toString());
      if(seatCount==2) localStorage.setItem("second2",(index+1).toString());
      if(seatCount==3) localStorage.setItem("third2",(index+1).toString());
      if(seatCount==4) localStorage.setItem("fourth2",(index+1).toString());
    }
   
  }
   
  let flight3=localStorage.getItem("flight");
  let flight4:Flight=JSON.parse(flight3);

  this.current_cost-=flight4.baseFare;
  localStorage.setItem("newUpperDeck2",newUpperDeck.toString());
  localStorage.setItem("newLowerDeck2",newLowerDeck.toString());
   localStorage.setItem("totalSeats2",seatCount.toString());
   localStorage.setItem("totalFare2",this.current_cost.toString());
   console.log(seatCount);
   localStorage.setItem("passengerDetails2","1");
    this._router.navigate(['passengerdetails2']);
  
  }
  
}
