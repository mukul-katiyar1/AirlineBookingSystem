export class Customer{
    title:string;
    firstName:string;
    lastName:string;
    dateOfBirth:string;
    phoneNumber:string;
    emailId:string;
    password:string;

    constructor( title:string,firstName:string ,lastName:string, dateOfBirth:string,  phoneNumber:string,emailId:string,  password:string){
        this.emailId = emailId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.title = title;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
  
}