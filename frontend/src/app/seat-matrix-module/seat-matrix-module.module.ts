import { NgModule } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider'

const RegistrationComponents=[
  MatDividerModule
];


@NgModule({
  
  imports: [
   RegistrationComponents
  ],
  exports:[
    RegistrationComponents
  ]
})
export class SeatMatrixModuleModule { }
