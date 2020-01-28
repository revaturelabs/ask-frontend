import { browser, by, element } from 'protractor';
import { AppPage } from '../app.po';

export class QuestionChips extends AppPage {



  // For checking if the chips in the actual individual question page are related to the question you picked
  // EX: a java related question should have Java chip
  getToQuestionPage() {
    this.navigateTo();
    this.login(2);
  }


}
