export class ToDoAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('to-do-app-app h1')).getText();
  }
}
