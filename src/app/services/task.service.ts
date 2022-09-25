import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'http://localhost:5001/tasks';

  getTasks() {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task) {
    const url = `${this.apiUrl}/${task._id}`;
    return this.http.delete<Task>(url);
  }

  updateTask(task: Task) {
    const url = `${this.apiUrl}/${task._id}`;
    return this.http.patch<Task>(url, task, httpOptions);
  }

  addTask(task: Task) {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
