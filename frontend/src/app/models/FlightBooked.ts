export class FlightBooked{
    bookingId:string;
   transactionId:number;
   bookingDate:string;
   adminCancellationStatus:number;
   customerCancellationStatus:number;
   bookedSeats:number;
   paymentMethod:string;
   totalFare:number
   
    constructor(bookingId:string,transactionId:number, bookingDate:string,adminCancellationStatus:number,
           customerCancellationStatus:number,bookedSeats:number,paymentMethod:string,totalFare:number){
           
   this.bookingId = bookingId;
   this.transactionId = transactionId;
   this.bookingDate = bookingDate;
   this.adminCancellationStatus = adminCancellationStatus;
   this.customerCancellationStatus = customerCancellationStatus;
   this.bookedSeats = bookedSeats;
   this.paymentMethod = paymentMethod;
   this.totalFare= totalFare;
 }

}