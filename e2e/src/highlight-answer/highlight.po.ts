import { AppPage } from '../app.po';
import { element, by, browser } from 'protractor';


export class Highlight extends AppPage{
    navigateToHighlightAnswer(){
        this.navigateTo();
        this.login(1);
        element(by.css('[routerlink="/user-questions"')).click();
    }
    navigateToAllQuestions(){
        element(by.css('[routerlink="/questions"')).click();
    }

    // check(){
    //     element(by.className('question-card mat-card question high')).then((function id {
    //         expect(element(by.id)).toBe('q=16');
    //     }));
    // }

    // check(){
        // let parent = element(by.className('question-card mat-card question high'));
        // expect(parent.element('mat-card-header').element('mat-card-title')).toBeDefined('q=16');
        // expect(element(by.css('.high'))).;
    // }
    
    selectQuestion(question: number) {
        element(by.id('q2=' + question)).click();
      }
    selectResponse(response: number){
        browser.actions().mouseMove(element(by.id('r=' + response))).perform();
    }
    clickHighlight(response: number){

        element(by.id( "btn" + response)).click();
    }
}