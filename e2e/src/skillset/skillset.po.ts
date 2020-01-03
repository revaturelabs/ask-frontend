import { browser, by, element } from 'protractor';
import { AppPage } from '../app.po';

export class SkillsetPage extends AppPage {
    navigateToSkillSetQuestion() {
        this.navigateTo();
        this.login(4);
        element(by.css('[routerlink="/expert-questions"]')).click();
    }

    selectQuestion(question: number) {
        element(by.id('q2=' + question)).click();
    }
}
