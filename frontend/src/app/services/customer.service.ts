import { FlightBooked } from './../models/FlightBooked';
import { BookingDto } from './../models/BookingDto';
import { Observable } from 'rxjs';
import { Flight } from './../models/Flight';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/Customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  baseUrl:string= 'http://localhost:9091/StarkAir/customer';

  loginAuthenticator(emailId:string,password:string){
    
    return this.http.get(this.baseUrl+'/'+emailId+'/'+password,{responseType:'text'});
  }
   //CustomerRegistration
   createCustomer(customer: Customer) {
    return this.http.post(this.baseUrl+'/register', customer);
  }
  searchFlightByCustomer(travelDate:string,source:string,destination:string):Observable<Flight[]>{
    return this.http.get<Flight[]>(this.baseUrl+"/"+travelDate+"/"+source+"/"+destination);
  }
  confirmBooking(dto:BookingDto){
    return this.http.post(this.baseUrl+'/confirmBooking.do',dto);
  }
  viewUpcomingFlightsByCustomer(emailId:string):Observable<FlightBooked[]>{
    return this.http.get<FlightBooked[]>(this.baseUrl+"/upcomingFlight/"+emailId);
  }
  viewFlightHistoryByCustomer(emailId:string):Observable<FlightBooked[]>{
    return this.http.get<FlightBooked[]>(this.baseUrl+"/flightHistory/"+emailId);
  }
  cancelFlightByCustomer(bookingId:string){
    return this.http.get(this.baseUrl+'/flightDelete/'+bookingId);
  }
  sendOtp(emailId:string){
    return this.http.get(this.baseUrl+"/sent/"+emailId);
  }
  verifyOtp(emailId:string,otp:any){
    return this.http.put(this.baseUrl+"/verify/"+emailId,otp);
  }
  updateCustomerPassword(emailId:string,password:string){
    return this.http.get(this.baseUrl+"/update/"+emailId+"/"+password);
  }


}
