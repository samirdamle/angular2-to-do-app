import { Component } from '@angular/core';
import { ToDoItemComponent} from './to-do-item/to-do-item.component';
import {ToDoItemService} from './services/to-do-items.service'

@Component({
  moduleId: module.id,
  selector: 'to-do-app',
  templateUrl: 'to-do-app.component.html',
  styleUrls: ['to-do-app.component.css'],
  directives: [ToDoItemComponent],
  providers: [ToDoItemService]
})
export class ToDoAppComponent {
  title = 'To Do App';
  toDoItems;

  constructor(private TDIS: ToDoItemService){
    this.getData();
  }

  private getData(){
    this.TDIS.getToDoItems().then(items=> this.toDoItems = items);
  }
}
