import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ToDoAppAppComponent } from '../app/to-do-app.component';

beforeEachProviders(() => [ToDoAppAppComponent]);

describe('App: ToDoApp', () => {
  it('should create the app',
      inject([ToDoAppAppComponent], (app: ToDoAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'to-do-app works!\'',
      inject([ToDoAppAppComponent], (app: ToDoAppAppComponent) => {
    expect(app.title).toEqual('to-do-app works!');
  }));
});
