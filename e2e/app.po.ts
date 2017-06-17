import { browser, by, element } from 'protractor';

export class AsherfosterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('af-root h1')).getText();
  }
}
