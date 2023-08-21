import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: string[] = [];

  constructor() { }

  addTask(task: string): void {
    this.tasks.push(task);
  }

  getTasks(): string[] {
    return this.tasks;
  }
}
