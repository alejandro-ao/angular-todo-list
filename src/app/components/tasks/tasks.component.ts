import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  tasks: Task[] = this.taskService.getTasks();

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task);
  }
}
