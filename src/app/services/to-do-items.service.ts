import { Injectable } from '@angular/core';
import { TODOITEMS } from './mock-to-do-items';

/**
 * ToDoItemService
 */
@Injectable()
export class ToDoItemService {
    getToDoItems() {
        return Promise.resolve(TODOITEMS);
    }
}