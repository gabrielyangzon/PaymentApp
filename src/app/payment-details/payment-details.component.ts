import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { PaymentDetail } from '../services/payment-detail.model'

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {


  constructor(public service : DataService) { }

  public paymentDetails : PaymentDetail[]
  
  ngOnInit(): void {
   this.service.getPayments().subscribe(res => {
    
   
    this.paymentDetails = res
   }
    );
 

  }

}
