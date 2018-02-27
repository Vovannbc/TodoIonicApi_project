import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'receiptdata',
    templateUrl: 'receiptdata.component.html',
    styleUrls: ['/src/components/receiptdata.component/receiptdata.component.scss']
})
export class ReceiptDataComponent implements OnInit {
    @Input('receipt') receipt: any;

    statusToEdit: boolean;


    constructor() {
    }

    ngOnInit() {
    }

    receiveToggleStatus(status) {
        this.statusToEdit = status;
    }

}
