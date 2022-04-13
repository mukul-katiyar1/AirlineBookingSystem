import { ContactUsComponent } from './contact-us/contact-us.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { PassengerDetails2Component } from './passenger-details2/passenger-details2.component';
import { ConfirmLogOutComponent } from './confirm-log-out/confirm-log-out.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { Seatmatrix2Component } from './seatmatrix2/seatmatrix2.component';
import { PassengersDetailsComponent } from './passengers-details/passengers-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CombinedForgotOtpComponent } from './combined-forgot-otp/combined-forgot-otp.component';
import { UpcomingFlightsComponent } from './upcoming-flights/upcoming-flights.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { SearchFlightCardComponent } from './search-flight-card/search-flight-card.component';
import { UserGridComponent } from './user-grid/user-grid.component';
import { ViewFlightBookedComponent } from './view-flight-booked/view-flight-booked.component';
import { ListFlightComponent } from './list-flight/list-flight.component';
import { AdminGridComponent } from './admin-grid/admin-grid.component';
import { TwoWayFlighListComponent } from './two-way-fligh-list/two-way-fligh-list.component';
import { OtpComponent } from './otp/otp.component';
import { SeatMatrixComponent } from './seat-matrix/seat-matrix.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { RemoveFlightComponent } from './remove-flight/remove-flight.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CongratulationComponent } from './congratulation/congratulation.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightSelectComponent } from './flight-select/flight-select.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'flightsearch',component:FlightSearchComponent},
  {path:'flighselect',component:FlightSelectComponent},
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:LandingPageComponent},
  {path:'payment',component:PaymentComponent},
  {path:'congratulation',component:CongratulationComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'changepassword',component:ChangePasswordComponent},
  {path:'addflight',component:AddFlightComponent},
  {path:'removeflight',component:RemoveFlightComponent},
  {path:'adminhomepage',component:AdminHomePageComponent},
  {path:'userhomepage',component:UserHomePageComponent},
  {path:'seatmatrix',component:SeatMatrixComponent},
  {path:'otp',component:OtpComponent},
  {path:'twowayflight',component:TwoWayFlighListComponent},
  {path:'admingrid',component:AdminGridComponent},
  {path:'listflightcomponent',component:ListFlightComponent},
  {path:'ViewFlightBookedComponent',component:ViewFlightBookedComponent},
  {path:'usergrid',component:UserGridComponent},
  {path:'usergrid',component:UserGridComponent},
  {path:'UpcomingFlightsComponent',component:UpcomingFlightsComponent},
  {path:'bookinghistory',component:BookingHistoryComponent},
  {path:'combinedotp',component:CombinedForgotOtpComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'passengerdetails',component:PassengersDetailsComponent},
  {path:'seatmatrix2',component:Seatmatrix2Component},
  {path:'confirmdelete',component:ConfirmDeleteComponent},
  {path:'confirmlogout',component:ConfirmLogOutComponent},
  {path:'passengerdetails2',component:PassengerDetails2Component},
  {path:'learnmore',component:LearnMoreComponent},
  {path:'contactus',component:ContactUsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LandingPageComponent,FlightSelectComponent,FlightSearchComponent
  ,RegistrationComponent,LoginComponent,PaymentComponent
  ,CongratulationComponent,ForgotPasswordComponent,ChangePasswordComponent,AdminHomePageComponent
,RemoveFlightComponent,AddFlightComponent,UserHomePageComponent, SeatMatrixComponent,  TwoWayFlighListComponent,  OtpComponent,
AdminGridComponent,ListFlightComponent,ViewFlightBookedComponent,UserGridComponent, SearchFlightCardComponent
, UpcomingFlightsComponent,BookingHistoryComponent,CombinedForgotOtpComponent,NavbarComponent, PassengersDetailsComponent
,Seatmatrix2Component,ConfirmDeleteComponent, ConfirmLogOutComponent,
PassengerDetails2Component,
LearnMoreComponent,ContactUsComponent]

