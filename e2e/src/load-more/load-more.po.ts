import { browser, by, element, Key } from 'protractor';
import { AppPage } from '../app.po';

export class AnswerPage extends AppPage {
 

  loadingMoreQuestions() {
    this.navigateTo();
    this.login(3);
    element(by.css('#loadMore')).click();
}

  filterInput() {
    this.navigateTo();
    this.login(3);

    element(by.css('#catInput')).sendKeys('JavaScript');

    browser.actions().sendKeys(Key.ARROW_DOWN).perform();

    browser.actions().sendKeys(Key.ENTER).perform();

    element(by.css('#filterBtn')).click();
  }
}