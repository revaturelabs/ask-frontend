import { QuestionChips } from './question-chips.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
 let page: QuestionChips;

  beforeEach(() => {
    page = new QuestionChips();
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
