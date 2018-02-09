import { Component } from '@angular/core';

import { TodoList } from '../todoList/todoList';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TodoList;
  tab3Root = ContactPage;

  constructor() {

  }
}
