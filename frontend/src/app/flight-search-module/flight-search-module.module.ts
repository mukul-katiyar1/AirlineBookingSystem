import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';


const FlightSearchComponents=[
  
  MatButtonModule,MatSlideToggleModule,MatButtonToggleModule,MatDatepickerModule
  ,MatNativeDateModule,MatFormFieldModule,MatSelectModule,MatInputModule,MatSlideToggleModule
];

@NgModule({
 
  imports: [
   FlightSearchComponents
  ],

  exports:[
    FlightSearchComponents
  ]
})
export class FlightSearchModuleModule { }
