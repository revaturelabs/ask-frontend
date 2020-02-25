import { TestMsgPage } from './testmsg.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: TestMsgPage;

  beforeEach(() => {
    page = new TestMsgPage();
    page.navigateToResponse();
  });


  it('should show total response equivalence', () => {

    
    page.getMsgCountText().then(function(text)
    { 
      var fetchNumStr = text.split(':')[1];
      var intNumStr = parseInt(fetchNumStr,10);
      var getElementCount = page.getListofAllResponses();
    expect(getElementCount.count()).toBe(intNumStr);
   
    });  
  
  });


});