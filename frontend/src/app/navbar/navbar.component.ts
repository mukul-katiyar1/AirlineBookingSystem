import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ConfirmLogOutComponent } from '../confirm-log-out/confirm-log-out.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 isLogged1=true;
 isLogged2=true;
  constructor(private _router:Router,public dialog:MatDialog) { }
  
  buttonChange(){
    if(localStorage.getItem("userName")!=null){
      this.isLogged2=false;
    }
    else{
      this.isLogged2=true;
    }
    if(localStorage.getItem("emailId")!=null){
      this.isLogged1=false;
    }
    else{
      this.isLogged1=true;
    }

  }

  ngOnInit(): void {
    setInterval(() =>this.buttonChange(), 100);
  }
  home(){
    this._router.navigate(['']);
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
  logOut(){
    let returning=null;
    if((localStorage.getItem("userName")==null)&&(localStorage.getItem("emailId")==null)){
    return;
    }
   
    let dialogRef=this.dialog.open(ConfirmLogOutComponent);
    dialogRef.afterClosed().subscribe(result=>{
      returning=result;
      //console.log("result",returning,typeof returning,returning==null);
      if(returning=="true"){
        if(localStorage.getItem("userName")!=null)
        localStorage.removeItem("userName");
        else if(localStorage.getItem("emailId")!=null)
        localStorage.removeItem("emailId");
        this._router.navigate(['login']);
        localStorage.clear();
        console.log('out');
      }
    })
  }

  adminDashBoard(){
    this._router.navigate(['admingrid']);
  }
  userDashBoard(){
    this._router.navigate(['usergrid']);
  }
  contactUs(){
    this._router.navigate(['contactus']);
  }

}
