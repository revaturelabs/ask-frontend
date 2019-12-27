import { AppPage } from './answer.po';
import { browser, logging } from 'protractor';
import { callbackify } from 'util';

describe('answer a question as an expert', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.login();
  });

  it('should add a new question', () => {
    // page.navigateTo();
    console.log('hello');
    expect('').toBe('');
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
