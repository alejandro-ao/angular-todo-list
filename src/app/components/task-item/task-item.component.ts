import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { every } from 'rxjs';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Output() onDelete = new EventEmitter();
  @Output() onUpdate = new EventEmitter();

  @Input() task: Task = {
    name: 'default',
    description: 'default',
    checked: false,
  };

  constructor() {}

  ngOnInit(): void {}
  
  handleEdit() {
    this.onUpdate.emit(this.task);
  }
  
  handleDelete() {
    this.onDelete.emit(this.task);
  }

}
