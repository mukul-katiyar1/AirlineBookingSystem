import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
const LoginComponents=[
  MatTabsModule,MatSnackBarModule
];


@NgModule({
  
  imports: [
    LoginComponents
  ],
  exports:[
    LoginComponents
  ]
})
export class LoginModuleModule { }
