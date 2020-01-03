import { AnswerPage } from './load-more.po';
import { browser, logging, element, by } from 'protractor';
import { callbackify } from 'util';
import { FilteredQuestionListComponent } from '../../../src/app/static/filtered-question-list/filtered-question-list.component';

describe('answer a question as an expert', () => {
  let page: AnswerPage;

  beforeEach(() => {
    page = new AnswerPage();


  });


  it('should show more results when load more is clicked', () => {
    page.loadingMoreQuestions();
    var ele = element(by.css('div.preview-questions > app-preview-question:nth-of-type(21) .mat-card-title'));

    expect(ele.isPresent()).toBe(true);

    
  });

  it('should not give you more than 40', () => {
    page.loadingMoreQuestions();
    var ele = element(by.css('div.preview-questions > app-preview-question:nth-of-type(41) .mat-card-title'));

    expect(ele.isPresent()).toBe(false);

  });

  it('should give us filtered results', () => {
    
    page.filterInput();
    
    expect(element.all(by.cssContainingText('.mat-chips > .mat-chip', 'JavaScript')).count())
      .toBe(element.all(by.css('.question-card')).count());
  });



  afterEach(async () => {
   
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
