import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
// import { ReceiptModel } from '../../models/models';
import {ReceiptService} from "./receipt.service";

@Component({
  selector: 'receiptlist',
  templateUrl: './receiptsList.html',
    styleUrls: ['/src/pages/receiptList/receiptList.scss']
})

export class ReceiptsList implements OnInit{
    public receiptLists: any;
    constructor(
        public navCtrl: NavController,
        private receiptService: ReceiptService) {}

    data: string;

    getReceipts () {
        this.receiptService.getReceipts().subscribe((response) => {
            console.log(response);
            this.receiptLists = response;
        }, (err) => {
            console.log(err);
            console.error('Server not allowed');
        });
    }

    ngOnInit(){
        this.getReceipts();
    }

}
