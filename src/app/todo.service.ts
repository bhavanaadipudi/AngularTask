import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/todos`)
          .pipe(
              map((res: any) => {
                  return res;
              })
          );
  }

  addTodo(todo: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/todos`, todo);
  }

  updateTodo(todo: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/todos/${todo.id}`, todo);
  }

  deleteTodo(id: number): Observable<any> {
      return this.http.delete<any>(`${this.apiUrl}/todos/${id}`);
  }
}

