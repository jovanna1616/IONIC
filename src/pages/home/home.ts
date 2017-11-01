import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { TodoService } from '../../shared/todo.service';
import { TodoItemPage } from '../todo-item/todo-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	selectedItem: any;
	items: any;

  constructor (
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public modalCtrl: ModalController,
  	public todoService: TodoService
  	) {

		this.selectedItem = navParams.get('item');

		todoService.getAll().then((todos) => {
      this.items = todos;
    });
	}

  public showTodoDetails (todo) {
    this.modalCtrl.create(
      TodoItemPage,
      { todo }
    ).present();
  }

}
