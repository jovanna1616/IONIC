import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()

export class TodoService {

	constructor(public storage: Storage) {

	}

	public getAll() {
		return this.storage.get('todos').then((todos) => {
			return todos || [];
		});
	}
	
	public push(todo) {
		return this.getAll().then((todos) => {
			todos.push(todo);
			return this.storage.set('todos', todos);
		});
	}

	
}