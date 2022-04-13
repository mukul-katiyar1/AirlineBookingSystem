import { FlightID } from './../models/FlightID';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../models/Admin';
import { Flight } from '../models/Flight'
import { Observable } from 'rxjs';
import { FlightBooked } from '../models/FlightBooked';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  baseUrl:string= 'http://localhost:9091/StarkAir/admin/';

  loginAuthenticator(admin: Admin){
    return this.http.post(this.baseUrl,admin,{responseType: 'text'});
  }

  addFlightByAdmin(flight:Flight){
    return this.http.post(this.baseUrl+"/addFlight.do",flight,{responseType: 'text'});
}
  removeFlightByAdmin(fId:FlightID){
    return this.http.post(this.baseUrl+"/deleteFlight.do",fId, {responseType: 'text'});
  }
  viewAllFlightsByAdmin():Observable<Flight[]>{
    return this.http.get<Flight[]>(this.baseUrl+"/viewFlights.do");
  }
  viewAllFlightBookedByAdmin():Observable<FlightBooked[]>{
    return this.http.get<FlightBooked[]>(this.baseUrl+"/viewFlightBooked.do");
  }
  
}
