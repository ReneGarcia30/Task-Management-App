import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  todos: { text: string; completed: boolean }[] = [];
  newTodo = '';

  constructor(private http: HttpClient) {
    this.loadTodos();
  }

  loadTodos() {
    this.http.get<string[]>('http://localhost:5278/todos').subscribe(data => {
      this.todos = data.map(text => ({ text, completed: false }));
    });
  }  

  addTodo() {
    const trimmed = this.newTodo.trim();
    if (!trimmed) return;
  
    this.http.post<string[]>('http://localhost:5278/todos', trimmed, {
      headers: { 'Content-Type': 'text/plain' }
    }).subscribe(data => {
      this.todos = data.map(text => ({ text, completed: false }));
      this.newTodo = '';
    });
  }
  markCompleted(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
  
}
