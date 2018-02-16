import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import { ReceiptModel } from '../../models/models';

@Component({
  selector: 'todo-list',
  templateUrl: './todoList.html',
    styleUrls: ['/src/pages/todoList/todoList.scss']
})

export class TodoList {
    public todoLists: ReceiptModel[] = [];
    constructor(public navCtrl: NavController,
              private http: HttpClient) {}

    public messageForm: FormGroup = new FormGroup({
        title: new FormControl(),
        ingredient: new FormControl()
    });
    public outputValue :string;

    public submitHandler () {
        const body = new ReceiptModel();
        body.title = this.messageForm.controls.title.value;
      console.log('submit');
      const header = new HttpHeaders();
      header.set('Content-Type', 'application/json');
      this.http.post('http://127.0.0.1:3000/string',
                      body,
                      {headers: header})
          .subscribe(data => {
              console.log(data); // data received by server
              // this.outputValue = data;
          }, err => {
              console.error(err);
          })
    }

    // public viewRes (res) {
    //     return this.outputValue.push(res.body)
    // }
}
