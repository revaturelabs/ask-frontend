import { browser, by, element } from 'protractor';
import { AppPage } from '../app.po';

export class AnswerPage extends AppPage {
  navigateToAnswerQuestion() {
    this.navigateTo();
    this.login(3);
    element(by.css('[routerlink="/expert-questions"]')).click();
  }
  selectQuestion(question: number) {
    element(by.css('div.preview-questions > app-preview-question:nth-of-type('+question+') .mat-card-title')).click();
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
