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
  selectQuestion(question: number) {
    element(by.id('q=' + question)).click();
  }
  highlightResponse(response: number) {
    browser
      .actions()
      .mouseMove(element(by.id('r=' + response)))
      .perform();
    browser.sleep(1000);
    element(by.id('btn7')).click();
  }
}
