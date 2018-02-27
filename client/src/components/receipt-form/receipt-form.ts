import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ReceiptModel} from "../../models/models";
import {HttpHeaders} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'receipt-form',
  templateUrl: 'receipt-form.html'
})


export class ReceiptFormComponent {
  constructor(private http: HttpClient) {
    console.log('Hello ReceiptFormComponent Component');
  }

  public messageForm: FormGroup = new FormGroup({
    title: new FormControl(),
    ingredient: new FormControl()
  });


  public submitHandler () {
      const body = new ReceiptModel();
      body.title = this.messageForm.controls.title.value;
    console.log('submit');
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    this.http.post('http://localhost:3000',
                    body,
                    {headers: header})
        .subscribe(data => {
            console.log(data); // data received by server
            // this.outputValue = data;
        }, err => {
            console.error(err);
        })
  }



}
