import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
const BaseComponents=[
  FormsModule,ReactiveFormsModule,MatButtonModule,MatToolbarModule,
  MatIconModule,MatDialogModule,MatCardModule
  
  
];

@NgModule({
 
  imports: [
    BaseComponents
  ],
  exports:[
    BaseComponents
  ]
})
export class MaterialBaseModulesModule { }
