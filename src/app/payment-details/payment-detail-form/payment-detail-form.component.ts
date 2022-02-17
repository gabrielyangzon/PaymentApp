import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { PaymentDetail } from '../../services/payment-detail.model'
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {


  @Output() onSubmitClickHandler  = new EventEmitter();

  public errorMessage :string =""
  public formData : PaymentDetail = new PaymentDetail()
  constructor(public service : DataService) { }

  

  ngOnInit(): void {
   
  }

  onSubmitClicked(){
    this.errorMessage = ""
    if(this.formData.cardOwnerName === ""){
      this.errorMessage += "Please input Card owner, \n "
    }
    if(this.formData.cardNumber === ""){
      this.errorMessage += "Please input Card Number, \n "
    }
   if(this.formData.expirationDate === ""){
      this.errorMessage += "Please input Expiration Date, \n "
    }
   if(this.formData.securityCode === ""){
      this.errorMessage += "Please input Security Code, \n "
    }


    if(this.errorMessage === ""){
         this.onSubmitClickHandler.emit(this.formData)
    }


  }

}
