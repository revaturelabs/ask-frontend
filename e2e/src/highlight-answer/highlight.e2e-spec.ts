import { Highlight } from './highlight.po';
import { browser, logging, element, by } from 'protractor';
import { checkServerIdentity } from 'tls';
describe('highlighting answer and checking question preview has a border in "/questions"', () =>
{
    let page: Highlight;

    beforeEach(() => {
        page = new Highlight();
        page.navigateToHighlightAnswer();
    });

    it('should highlight question preview if an answer is highlighted', () => {
        page.selectQuestion(16);
        page.selectResponse(6);
        page.clickHighlight(6);
        browser.sleep(1000);
        page.navigateToAllQuestions();
        expect(element(by.id('q1=16')).getAttribute('class')).toContain('high');
        browser.sleep(2000);
    });

    it('should not highlight question preview that does not have a highlighted response', () => {
        page.navigateToAllQuestions();
        expect(element(by.id('q1=6')).getAttribute('class')).toEqual('question-card mat-card question');
        browser.sleep(2000);
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);

        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,

        } as logging.Entry));
    });

});
