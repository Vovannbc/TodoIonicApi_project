import {Component, Input, OnInit} from '@angular/core';

/**
 * Generated class for the TestcompComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'receiptdata',
  templateUrl: 'receiptdata.component.html',
    styleUrls: ['/src/components/testcomp/testcomp.scss']
})
export class ReceiptDataComponent implements OnInit{
    @Input('receipt')
    receipt: any;

  constructor() {
    console.log('New receiptdata Component');
  }

  ngOnInit(){
  }

}
