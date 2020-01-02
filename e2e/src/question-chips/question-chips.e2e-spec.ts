import { QuestionChips } from './question-chips.po';
import { browser, logging, element, by } from 'protractor';

describe('Individual question page', () => {
 let page: QuestionChips;

  beforeEach(() => {
    page = new QuestionChips();
  });

  

  it('should contain relevant tags listed from preview questions page', () => {
    
    page.getToQuestionPage();
    browser.sleep(2000);
    expect(element(by.css('p[_ngcontent-oht-c20]')).getText()).toBe('CSS');
    
    
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
