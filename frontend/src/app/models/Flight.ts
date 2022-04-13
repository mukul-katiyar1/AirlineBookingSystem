import{FlightID} from './FlightID'
export class Flight{
    fId:FlightID;
    source:string;
    destination:string;
    seats:number;
    returnDate:any;
    destinationArrivalDate:any;
    arrivalTime:string;
    departureTime:string;
    baseFare:number;
    adminCancellationStatus:number;
    lower:number;
    upper:number;

    constructor(fId:FlightID,
        source:string,
        destination:string,
        returnDate:any,
        destinationArrivalDate:any,
        arrivalTime:string,
        departureTime:string,
        baseFare:number
        ){
            this.fId=fId;
            this.source=source;
            this.destination=destination;
            this.returnDate=returnDate;
            this.destinationArrivalDate=destinationArrivalDate;
            this.arrivalTime=arrivalTime;
            this.departureTime=departureTime;
            this.baseFare=baseFare;
            this.seats=48;
            this.adminCancellationStatus=0;
            this.lower=0;
            this.upper=0;
        }
}