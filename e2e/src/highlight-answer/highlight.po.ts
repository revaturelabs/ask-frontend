import { AppPage } from '../app.po';
import { element, by, browser } from 'protractor';


export class Highlight extends AppPage {
    navigateToHighlightAnswer() {
        this.navigateTo();
        this.login(1);
        element(by.css('[routerlink="/user-questions"')).click();
    }

    navigateToUserQuestions() {
        browser.sleep(1000);
        element(by.css('[routerlink="/user-questions"')).click();
        browser.sleep(1000);
    }
    selectQuestion(question: number) {
        element(by.id('q2=' + question)).click();
      }
    selectResponse(response: number) {
        browser.sleep(2000);
        browser.waitForAngularEnabled(false);
        browser
            .actions()
            .mouseMove(element(by.id('r=' + response)))
            .perform();
    }
    clickHighlight(response: number) {
        browser.sleep(1000);
        element(by.id( 'btn' + response)).click();
    }
}
