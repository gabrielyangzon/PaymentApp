import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { PaymentDetail} from '../../services/payment-detail.model'


@Component({
  selector: 'app-payment-detail-table',
  templateUrl: './payment-detail-table.component.html',
  styleUrls: ['./payment-detail-table.component.css']
})
export class PaymentDetailTableComponent implements OnInit {


  @Input() data : PaymentDetail[]

  @Output() onDeleteClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
     
  }


  onDeleteClickHandler(id : number){
    this.onDeleteClick.emit(id)
  }

}
