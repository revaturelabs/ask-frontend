import { QuestionChips } from './question-chips.po';
import { browser, logging, element, by } from 'protractor';

describe('Individual question page', () => {
 let page: QuestionChips;

  beforeEach(() => {
    page = new QuestionChips();
  });

  

  it('should contain relevant tags listed from preview questions page', () => {
    
    page.getToQuestionPage();
    
    //expect the first tag on the question involved on the preview page, 
    //to be the same as the first tag on the individual question involved
    expect(element(by.css('div.preview-questions > app-preview-question:nth-of-type(13) div:nth-of-type(1) > mat-chip:nth-of-type(1)')).getText())
    .toBe(element(by.css('div.preview-questions > app-preview-question:nth-of-type(13) .mat-card-title')).click()
      .then(()=>{return element(by.css('div.mat-chip-list-wrapper > div:nth-of-type(1) > #singleChip')).getText()}));
    
    
  });


  afterEach(async () => {
    
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
