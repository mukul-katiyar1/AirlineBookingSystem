import { RegistrationComponent } from './../registration/registration.component';
import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
const RegistrationComponents=[
  MatStepperModule
];


@NgModule({
  
  imports: [
   RegistrationComponents
  ],
  exports:[
    RegistrationComponents
  ]
})
export class RegistrationModuleModule { }
