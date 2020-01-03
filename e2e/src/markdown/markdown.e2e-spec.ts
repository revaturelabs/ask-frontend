import { QuestionPage } from './markdown.po';
import { browser, logging, protractor, element, by, $, $$ } from 'protractor';
import { callbackify } from 'util';

const EC = protractor.ExpectedConditions;
describe('answer a question as an expert', () => {
  let page: QuestionPage;

  beforeEach(() => {
    page = new QuestionPage();
    page.navigateToAskQuestion();
  });


  it('should add a question', async () => {
    // page.enterAskQuestionTitle('Testing title');
    // page.enterAskQuestionCategory('SQL');
    // page.enterAskQuestionBody('#Testing Information');
    // expect('').toBe('');
    const titleInputField = $$('.mat-form-field-infix>input').get(1);
    await titleInputField.sendKeys('Test Data');
    expect($('mat-error').isPresent()).toBe(true);
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
