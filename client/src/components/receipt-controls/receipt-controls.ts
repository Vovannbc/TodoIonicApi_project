import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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
