import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }


  login(user: number) {
    element(by.css('[placeholder="Select User"]')).click();
    element(by.css('[value="' + user + '"]')).click();
    element(by.css('[type="submit"]')).click();
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
