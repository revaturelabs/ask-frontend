import { TestMsgPage } from './testmsg.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: TestMsgPage;

  beforeEach(() => {
    page = new TestMsgPage();
    page.navigateToResponse();
  });


  it('should show total response equivalence', () => {


    page.getMsgCountText().then(function (text) {
      // console.log(text);
      const fetchNumStr = text.split(':')[1];
      // console.log("fet inside function ");
      // console.log(fetchNumStr);
      // console.log("preparing to test this one");
      const intNumStr = parseInt(fetchNumStr, 10);
      const getElementCount = page.getListofAllResponses();
      expect(getElementCount.count()).toBe(intNumStr);

    });

  });


});
