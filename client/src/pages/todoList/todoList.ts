import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import { ListModel } from './todoList.model';

@Component({
  selector: 'todo-list',
  templateUrl: './todoList.html'
})

export class TodoList {
    public todoLists: ListModel[] = [];
    constructor(public navCtrl: NavController,
              private http: HttpClient) {}

    public messageForm: FormGroup = new FormGroup({
        messageControl: new FormControl()
    });
    public inputValue :string;

    public submitHandler () {
        const message = new ListModel();
        message.message = this.messageForm.controls.messageControl.value;
      console.log('submit');
      const header = new HttpHeaders();
      header.set('Content-Type', 'application/json');
      this.http.post('http://127.0.0.1:3000/string', {val: message}, {headers: header})
          .subscribe(data => {
              console.log(data);
              console.log(data); // data received by server
              console.log(data);
          })
    }
}
