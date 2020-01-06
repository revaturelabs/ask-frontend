import { AnswerPage } from '../answer/answer.po';
import { browser, logging } from 'protractor';
import { callbackify } from 'util';

describe('highlight a response from a question', () => {
  let page: AnswerPage;

  beforeEach(() => {
    page = new AnswerPage();
    page.navigateToHighlightResponse();
  });

  it('should not leave the page after highlighting a response', () => {
    page.selectQuestion(6);
    page.highlightResponse(5);
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/view-question');
    browser.sleep(3000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
