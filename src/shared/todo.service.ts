import { Injectable } from '@angular/core';

@Injectable()

export class TodoService {

	todos: Array<{title: string, date: string, time: string, done: boolean}>;

	public push(todo) {
		if (!this.todos) {
			this.todos = [];
		}
		this.todos.push(todo);
	}

	public getAll() {
		return this.todos;
	}
}