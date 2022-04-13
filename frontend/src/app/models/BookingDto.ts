import { FlightID } from './FlightID';
import { PassengerDetails } from './PassengerDetails';
import { FlightBooked } from './FlightBooked';
export class BookingDto{
  
    fb:FlightBooked;
    passengerdetails:PassengerDetails;  
    fId:FlightID;
    emailId:string;
    lower:string;
    upper:string;

    constructor(fb:FlightBooked,
        passengerdetails:PassengerDetails,  
        fId:FlightID,
        emailId:string,lower:string,upper:string){
            this.fb=fb;
            this.fId=fId;
            this.passengerdetails=passengerdetails;
            this.emailId=emailId;
            this.lower=lower;
            this.upper=upper;
        }
    
}