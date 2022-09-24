import { Injectable } from '@angular/core';

import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks() {
    console.log('getting tasks from db');
    return TASKS;
  }

  deleteTask(task: Task) {
    console.log('deleting task from service: ', task);
  }

  updateTask(task: Task) {
    console.log("updateing task from service:", task)
  }
}
