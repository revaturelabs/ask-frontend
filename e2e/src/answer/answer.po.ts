import { browser, by, element } from 'protractor';
import { AppPage } from '../app.po';

export class AnswerPage extends AppPage {
  navigateToAnswerQuestion() {
    this.navigateTo();
    this.login(3);
    element(by.css('[routerlink="/expert-questions"]')).click();
  }
  navigateToHighlightResponse() {
    this.navigateTo();
    this.login(1);
    element(by.css('[routerlink="/user-questions"]')).click();
  }
  highlightResponse(response: number) {
    browser.waitForAngularEnabled(false);
    browser
      .actions()
      .mouseMove(element(by.id('r=' + response)))
      .perform();
    browser.sleep(1000);
    element(by.id('btn' + response)).click();
    element(by.id('r=' + response)).click();
  }
  selectQuestion(question: number) {
    element(by.id('q2=' + question)).click();
  }
  getAnswerBody() {
    return element(by.css('textarea[name="body"]'));
  }
  enterTestData() {
    element(by.css('textarea[name="body"]')).sendKeys('Test');
  }
  selectSubmit() {
    element(by.css('mat-card-actions>button>span')).click();
  }
}
