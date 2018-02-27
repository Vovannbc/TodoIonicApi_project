import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormControl, FormGroup} from "@angular/forms";
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

    public messageForm: FormGroup = new FormGroup({
        title: new FormControl(),
        ingredient: new FormControl()
    });

    data: string;

    // public submitHandler () {
    //     const body = new ReceiptModel();
    //     body.title = this.messageForm.controls.title.value;
    //   console.log('submit');
    //   const header = new HttpHeaders();
    //   header.set('Content-Type', 'application/json');
    //   this.http.post('http://127.0.0.1:3000/string',
    //                   body,
    //                   {headers: header})
    //       .subscribe(data => {
    //           console.log(data); // data received by server
    //           // this.outputValue = data;
    //       }, err => {
    //           console.error(err);
    //       })
    // }

    getReceipts () {
        this.receiptService.getReceipts().subscribe((response) => {
            console.log(response);
            this.receiptLists = response;
        }, () => {
            console.error('Server not allowed');
        });
    }

    ngOnInit(){
        this.getReceipts();
    }

    // receiveStatusForEdit(data) {
    //     this.data = data
    // }
}
