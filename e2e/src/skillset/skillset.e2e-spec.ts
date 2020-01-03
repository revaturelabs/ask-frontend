import { SkillsetPage } from './skillset.po';
import { browser, logging, by, element } from 'protractor';
import { callbackify } from 'util';

describe('count large expert skill set', () => {
    let page: SkillsetPage;


    beforeEach(() => {
        page = new SkillsetPage();
        page.navigateToSkillSetQuestion();
    });

    it('move the mouse to the hover button and show the expert hidden skills', () => {
        page.selectQuestion(1);
        const hoverSkillSet = element(by.id('skillTagPopover_' + 2));
        browser.actions().mouseMove(hoverSkillSet).perform();
        browser.sleep(10000);
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
