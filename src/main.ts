import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ToDoAppAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ToDoAppAppComponent);
