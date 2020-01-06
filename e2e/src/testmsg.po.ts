import { browser, by, element } from 'protractor';

export class TestMsgPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

// new function added to login - takeout if necessary
login(user: number) {
  element(by.css('[placeholder="Select User"]')).click();
  element(by.css('[value="' + user + '"]')).click();
  element(by.css('[type="submit"]')).click();
}

  getMsgCountText() {
   return element(by.css('app-view-question .msg-count')).getText() as Promise<string>;

  }

  // count all the response elements this figure will compare with response variable for testing
  getListofAllResponses(){
    var respElements = element.all(by.css('.response-component'));
    return respElements;
  }


  // add this new navigation to a certain topic question in order to test total responses
  navigateToResponse() {
    const second = 1000;
    this.navigateTo();
    this.login(3);
    element(by.cssContainingText('.mat-card-title', ' Java Collections')).click();
    browser.sleep(1*second);
  }
}
