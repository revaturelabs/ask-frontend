import { browser, by, element } from 'protractor';
import { AppPage } from '../app.po';


export class QuestionPage extends AppPage {
  navigateToAskQuestion() {
    this.navigateTo();
    this.login(1);
    element(by.css('button[routerlink="/ask"]')).click();
  }
  enterAskQuestionTitle(title: string) {
    const titleElement = element(by.css('[placeholder="Title: "]'));
    titleElement.sendKeys(title);
    titleElement.click();
    titleElement.sendKeys(title);
  }
  enterAskQuestionCategory(category: string) {
    element(by.css('[placeholder="Select category tags: "]')).click();
    element(by.css('mat-option[ng-reflect-value="' + category + '"]')).click();
  }
  enterAskQuestionBody(question: string) {
    element(by.css('.ace_text')).click();
    element(by.css('.ace_text')).sendKeys(question);
  }
}
