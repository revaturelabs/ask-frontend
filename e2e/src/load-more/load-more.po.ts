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

  filterALot() {

    this.navigateTo();
    this.login(3);

    element(by.css('#catInput')).sendKeys('JavaScript');

    browser.actions().sendKeys(Key.ARROW_DOWN).perform();

    browser.actions().sendKeys(Key.ENTER).perform();
    element(by.css('#catInput')).sendKeys('Java');

    browser.actions().sendKeys(Key.ARROW_DOWN).perform();

    browser.actions().sendKeys(Key.ENTER).perform();
    element(by.css('#catInput')).sendKeys('SQL');

    browser.actions().sendKeys(Key.ARROW_DOWN).perform();

    browser.actions().sendKeys(Key.ENTER).perform();
    element(by.css('#catInput')).sendKeys('Docker');

    browser.actions().sendKeys(Key.ARROW_DOWN).perform();

    browser.actions().sendKeys(Key.ENTER).perform();
    element(by.css('#catInput')).sendKeys('AWS');

    browser.actions().sendKeys(Key.ARROW_DOWN).perform();

    browser.actions().sendKeys(Key.ENTER).perform();
    element(by.css('#catInput')).sendKeys('Algor');

    browser.actions().sendKeys(Key.ARROW_DOWN).perform();

    browser.actions().sendKeys(Key.ENTER).perform();
    element(by.css('#catInput')).sendKeys('HTML');

    browser.actions().sendKeys(Key.ARROW_DOWN).perform();

    browser.actions().sendKeys(Key.ENTER).perform();
    element(by.css('#catInput')).sendKeys('CSS');

    browser.actions().sendKeys(Key.ARROW_DOWN).perform();

    browser.actions().sendKeys(Key.ENTER).perform();
    element(by.css('#catInput')).sendKeys('Angular');

    browser.actions().sendKeys(Key.ARROW_DOWN).perform();

    browser.actions().sendKeys(Key.ENTER).perform();
    element(by.css('#catInput')).sendKeys('REST');

    browser.actions().sendKeys(Key.ARROW_DOWN).perform();

    browser.actions().sendKeys(Key.ENTER).perform();
    element(by.css('#catInput')).sendKeys('Spring');

    browser.actions().sendKeys(Key.ARROW_DOWN).perform();

    browser.actions().sendKeys(Key.ENTER).perform();


    element(by.css('#filterBtn')).click();

  }
}
