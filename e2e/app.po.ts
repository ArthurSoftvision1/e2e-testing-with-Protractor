import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-home h2')).getText();
  }

  getAboutButton() {
    return element(by.css('[routerlink="/about"]'));
  }

  getHomeButton() {
    return element(by.css('[routerlink="/"]'));
  }

  getUserButton() {
    return element(by.css('[routerlink="/user/list"]'));
  }

  getAboutText() {
    return element(by.css('app-about h2')).getText();
  }

  getHometext() {
    return element(by.css('app-home h2')).getText();
  }

  getUserText() {
    return element(by.css('app-user-list h2')).getText();
  }

  findNestedClass() {
    return element(by.css(".nested-class"));
  }
}
