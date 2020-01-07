import { AnswerPage } from './load-more.po';
import { browser, logging, element, by } from 'protractor';
import { callbackify } from 'util';
import { FilteredQuestionListComponent } from '../../../src/app/static/filtered-question-list/filtered-question-list.component';

describe('questions list page', () => {
  let page: AnswerPage;

  beforeEach(() => {
    page = new AnswerPage();


  });

<<<<<<< HEAD
  it('should show all results', () => {
    const ele = element(by.css('div.preview-questions > app-preview-question:nth-of-type(22) .mat-card-title'));
=======

  it('should show more results when load more is clicked', () => {
    page.loadingMoreQuestions();
    var ele = element(by.css('div.preview-questions > app-preview-question:nth-of-type(21) .mat-card-title'));
>>>>>>> 5a35f0dcf27c68a203250883caf8bd0875956f03

    expect(ele.isPresent()).toBe(true);

    
  });

<<<<<<< HEAD
  it('should not give you more than 40 after ', () =>{
    const ele = element(by.css('div.preview-questions > app-preview-question:nth-of-type(41) .mat-card-title'));
=======
  it('should not give you more than 40', () => {
    page.loadingMoreQuestions();
    var ele = element(by.css('div.preview-questions > app-preview-question:nth-of-type(41) .mat-card-title'));
>>>>>>> 5a35f0dcf27c68a203250883caf8bd0875956f03

    expect(ele.isPresent()).toBe(false);

  });

  it('should give us filtered results', () => {
    
    page.filterInput();
    
    expect(element.all(by.cssContainingText('.mat-chips > .mat-chip', 'JavaScript')).count())
      .toBe(element.all(by.css('.question-card')).count());
  });

  it('should give us more questions even when we filter and click load more', () => {
    page.filterALot();
    const got = element(by.css('#loadMore')).click().then(()=>{return true;});
    expect(got).toBeTruthy();
  });

  it('should not give us more questions when we load all available questions using filters',()=>{
    page.filterALot();
    element(by.css('#loadMore')).click();
    element(by.css('#loadMore')).click();
    
     expect(element(by.css('#loadMore')).isPresent()).toBeFalsy();
 
  });

  afterEach(async () => {
   
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
