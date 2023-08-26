import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: any[] = [];
  newTodoTitle: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
      console.log(this.todos); 
    });
  }
  

  addTodo() {
    if (this.newTodoTitle.trim() !== '') {
      const newTodo = { title: this.newTodoTitle, status: 'pending' };
      this.todoService.addTodo(newTodo).subscribe(() => {
        this.newTodoTitle = '';
        this.fetchTodos();
      });
    }
  }

  updateTodoStatus(todo: any) {
    todo.status = todo.status === 'pending' ? 'done' : 'pending';
    this.todoService.updateTodo(todo).subscribe(() => {
      this.fetchTodos();
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.fetchTodos();
    });
  }
}