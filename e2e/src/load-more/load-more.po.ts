import { browser, by, element, Key } from 'protractor';
import { AppPage } from '../app.po';

export class AnswerPage extends AppPage {
  public isClicked:boolean = false;
  public arr = [];
  public amt :number = 0;
  public chips:number = 0;

  loadingMoreQuestions() {
    this.navigateTo();
    this.login(3);
    element(by.css('#loadMore')).click();
     
    
  }

  filterInput(){
    this.navigateTo();
    this.login(3);
    
    var ele;
    

    element(by.css('#catInput')).sendKeys('JavaScript');
    
   

     browser.actions().sendKeys(Key.ARROW_DOWN).perform();
    
     browser.actions().sendKeys(Key.ENTER).perform();
    
     element(by.css('#filterBtn')).click();
    
     element.all(by.css('.question-card')).count().then(function(amm){
      this.amt = amm;
    });
    
    

      for (let i = 1; i < (this.amt as Number); i++) {
        element.all(by.css('.question-card > .mat-chips')).count().then(function (sizej) {
          this.chips = sizej;
          console.log(sizej.toString());

          for (let j = 1; j < (this.chips); j++) {
           
            ele = element(by.css('div.preview-questions > app-preview-question:nth-of-type(' + i + ') div:nth-of-type(' + j + ') '));
           
            ele.getText().then(function (txt) {
              if (txt === 'JavaScript') {
                this.arr.push(true);
              }
            });
          }
        });
      }
    });
     

  }
}
