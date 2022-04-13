import { NgModule } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';




const paymentComponents=[
  MatProgressSpinnerModule,MatExpansionModule
 ];

@NgModule({
  
  imports: [paymentComponents
    
  ],
  exports:[paymentComponents

  ]
})
export class PaymentModuleModule { }
