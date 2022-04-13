export class PassengerDetails{
   // bookingId:string;
    passenger1Name:string;
    passenger1Age:number;
    passenger1Gender:string;
    passenger1SeatNumber:number;
    passenger2Name:string;
    passenger2Age:number;
    passenger2Gender:string;
    passenger2SeatNumber:number;
    passenger3Name:string;
    passenger3Age:number;
    passenger3Gender:string;
    passenger3SeatNumber:number;
    passenger4Name:string;
    passenger4Age:number;
    passenger4Gender:string;
    passenger4SeatNumber:number;
    
    constructor(bookingId:string,
        passenger1Name:string, passenger1Age:number, passenger1Gender:string,passenger1SeatNumber:number, 
    passenger2Name:string,passenger2Age:number,passenger2Gender:string,passenger2SeatNumber:number,
    passenger3Name:string,passenger3Age:number,passenger3Gender:string,passenger3SeatNumber:number,
    passenger4Name:string,passenger4Age:number,passenger4Gender:string,passenger4SeatNumber:number){
       // this.bookingId=bookingId;
                this.passenger1Name = passenger1Name;
                this.passenger1Age = passenger1Age;
                this.passenger1Gender = passenger1Gender;
                this.passenger1SeatNumber = passenger1SeatNumber;
                this.passenger2Name = passenger2Name;
                this.passenger2Age = passenger2Age;
                this.passenger2Gender = passenger2Gender;
                this.passenger2SeatNumber = passenger2SeatNumber;
                this.passenger3Name = passenger3Name;
                this.passenger3Age = passenger3Age;
                this.passenger3Gender = passenger3Gender;
                this.passenger3SeatNumber = passenger3SeatNumber;
                this.passenger4Name = passenger4Name;
                this.passenger4Age = passenger4Age; 
                this.passenger4Gender = passenger4Gender;
                this.passenger4SeatNumber = passenger4SeatNumber;    
            
        }
    }