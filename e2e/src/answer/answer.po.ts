import { browser, by, element } from 'protractor';
import { AppPage } from '../app.po';

export class AnswerPage extends AppPage {
  navigateToAnswerQuestion() {
    this.navigateTo();
    this.login(3);
    element(by.css('[routerlink="/expert-questions"]')).click();
  }
  selectQuestion(question: number) {
    element(by.id('q=' + question)).click();
  }
}
