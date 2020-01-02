import { browser, by, element } from 'protractor';
import { AppPage } from '../app.po';

export class QuestionChips extends AppPage {



  //For checking if the chips in the actual individual question page are related to the question you picked
  //EX: a java related question should have Java chip
  getToQuestionPage() {
    this.navigateTo();
    this.login(3);
    element(by.css('div.preview-questions > app-preview-question:nth-of-type(17) .mat-card-title')).click();
   // browser.sleep(2000);
  }

  
}
