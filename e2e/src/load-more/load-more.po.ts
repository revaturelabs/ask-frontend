import { browser, by, element, Key } from 'protractor';
import { AppPage } from '../app.po';

export class AnswerPage extends AppPage {
  navigateToAnswerQuestion() {
    this.navigateTo();
    this.login(3);
    element(by.css('#loadMore')).click();
    element(by.css('#catInput')).sendKeys('JavaScript');

    // browser.actions().sendKeys(Key.ARROW_DOWN).perform();
    // browser.actions().sendKeys(Key.ENTER).perform();

    // element(by.css('#filterBtn')).click();
    element(by.css('div.preview-questions > app-preview-question:nth-of-type(1) .mat-card-title')).click();
  }
}
