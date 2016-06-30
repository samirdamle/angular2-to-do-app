import {Component, Input} from '@angular/core'

@Component ({
    moduleId: module.id,
    selector: 'to-do-item',
    templateUrl: 'to-do-item.component.html'
})
export class ToDoItemComponent {
    @Input() title: string = 'Hello';
    @Input() description: string = 'Description comes here';
    @Input() completed: boolean = false;
}
