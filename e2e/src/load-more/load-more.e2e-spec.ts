import { AnswerPage } from './load-more.po';
import { browser, logging, element, by } from 'protractor';
import { callbackify } from 'util';
import { FilteredQuestionListComponent } from '../../../src/app/static/filtered-question-list/filtered-question-list.component';

describe('answer a question as an expert', () => {
  let page: AnswerPage;

  beforeEach(() => {
    page = new AnswerPage();


  });


  it('should show all results', () => {
    page.loadingMoreQuestions();
    var ele = element(by.css('div.preview-questions > app-preview-question:nth-of-type(22) .mat-card-title'));

    expect(ele.isPresent()).toBe(true);

    //browser.sleep(5000);
  });

  it('should not give you more than 40', () => {
    page.loadingMoreQuestions();
    var ele = element(by.css('div.preview-questions > app-preview-question:nth-of-type(41) .mat-card-title'));

    expect(ele.isPresent()).toBe(false);

    //browser.sleep(5000);
  });

  it('should give us filtered results', () => {
    page.filterInput();
    
    expect(page.arr.length).toBe(page.amt);

    browser.sleep(5000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
