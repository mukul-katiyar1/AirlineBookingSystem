import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-grid',
  templateUrl: './admin-grid.component.html',
  styleUrls: ['./admin-grid.component.css']
})
export class AdminGridComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("userName")==null)
    this._router.navigate(['login']);
    
  }

}
