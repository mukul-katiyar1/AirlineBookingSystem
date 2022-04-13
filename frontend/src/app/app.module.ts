import { AddFlightComponent } from './add-flight/add-flight.component';
import { SeatMatrixModuleModule } from './seat-matrix-module/seat-matrix-module.module';
import { AddFlightModulesModule } from './add-flight-modules/add-flight-modules.module';
import { FlightSelectModuleModule } from './flight-select-module/flight-select-module.module';
import { PaymentModuleModule } from './payment-module/payment-module.module';
import { MatButtonModule } from '@angular/material/button';
import { LoginModuleModule } from './login-module/login-module.module';
import { RegistrationModuleModule } from './registration-module/registration-module.module';
import { MaterialBaseModulesModule } from './material-base-modules/material-base-modules.module';
import { FlightSearchModuleModule } from './flight-search-module/flight-search-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Admin} from './models/Admin';
import {Customer} from './models/Customer';
import {FlightID} from './models/FlightID';
import {Flight} from './models/Flight';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbareComponent } from './navbare/navbare.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PassengersDetailsComponent } from './passengers-details/passengers-details.component';
import { Seatmatrix2Component } from './seatmatrix2/seatmatrix2.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { ConfirmLogOutComponent } from './confirm-log-out/confirm-log-out.component';
import {AdminService} from './services/admin.service';
import {CustomerService} from './services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { PassengerDetails2Component } from './passenger-details2/passenger-details2.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
  routingComponent,
  NavbareComponent
 
 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialBaseModulesModule,
    FlightSearchModuleModule,
    RegistrationModuleModule,
    LoginModuleModule,
    PaymentModuleModule,FlightSelectModuleModule,AddFlightModulesModule,SeatMatrixModuleModule
 
  ],
  providers: [AdminService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
