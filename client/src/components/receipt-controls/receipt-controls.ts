import {Component, EventEmitter, OnInit, Output} from '@angular/core';

/**
 * Generated class for the ReceiptControlsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'receipt-controls',
  templateUrl: 'receipt-controls.html'
})
export class ReceiptControlsComponent implements OnInit {

    status:boolean;
    @Output() toggleEvent = new EventEmitter();


  constructor() {}

  ngOnInit(){}

    sendToggleStatus(e){
        console.log(e);
        this.status = e.checked;
        this.toggleEvent.emit(e.checked);
    }


}
