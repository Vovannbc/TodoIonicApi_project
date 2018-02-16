import { Component } from '@angular/core';

/**
 * Generated class for the TestcompComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'testcomp',
  templateUrl: 'testcomp.html',
    styleUrls: ['/src/components/testcomp/testcomp.scss']
})
export class TestcompComponent {

  text: string;

  constructor() {
    console.log('Hello TestcompComponent Component');
    this.text = 'Hello World';
  }

}
