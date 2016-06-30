import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ToDoAppComponent } from '../app/to-do-app.component';

beforeEachProviders(() => [ToDoAppComponent]);

describe('App: ToDoApp', () => {
  it('should create the app',
      inject([ToDoAppComponent], (app: ToDoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'to-do-app works!\'',
      inject([ToDoAppComponent], (app: ToDoAppComponent) => {
    expect(app.title).toEqual('to-do-app works!');
  }));
});
