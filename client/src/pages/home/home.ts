import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
// import {catchError, tap} from "rxjs/operators";
// import {Observable} from "rxjs/Observable";
// import {of} from "rxjs/observable/of";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private http: HttpClient) {

  }
    // private log(message: string) {
    //     console.log('MessageService: ' + message);
    // }
    // private handleError<T> (operation = 'operation', result?: T) {
    //     return (error: any): Observable<T> => {
    //
    //         // TODO: send the error to remote logging infrastructure
    //         console.error(error); // log to console instead
    //
    //         // TODO: better job of transforming error for user consumption
    //         this.log(`${operation} failed: ${error.message}`);
    //
    //         // Let the app keep running by returning an empty result.
    //         return of(result as T);
    //     };
    // }

    someObj: any;
    httpUrl: string = 'http://127.0.0.1:3000/users';

    clickHandler () {
      console.log('clicked');
      this.http.get(this.httpUrl, {}).subscribe(
          (data) => {
              this.someObj = data;
              console.log(this.someObj.users)
          },
          (err)=> console.log(err)
      );
    }

}
