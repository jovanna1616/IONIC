import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-todo-item',
  templateUrl: 'todo-item.html'
})
export class TodoItemPage {
  todo: any;
	
  constructor (
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	) {
      this.todo = this.navParams.get('todo');
	}
  public close() {
    this.navCtrl.pop();
  }
}
