import { AppPage } from '../app.po';
import { element, by, browser } from 'protractor';


export class Highlight extends AppPage {
    navigateToHighlightAnswer() {
        this.navigateTo();
        this.login(1);
        element(by.css('[routerlink="/user-questions"')).click();
    }
    navigateToAllQuestions() {
        element(by.css('[routerlink="/questions"')).click();
    }
    selectQuestion(question: number) {
        element(by.id('q2=' + question)).click();
      }
    selectResponse(response: number) {
        browser.actions().mouseMove(element(by.id('r=' + response))).perform();
    }
    clickHighlight(response: number) {

        element(by.id('btn' + response)).click();
    }
}
