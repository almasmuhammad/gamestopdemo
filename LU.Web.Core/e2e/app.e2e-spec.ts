import { LU.Web.CorePage } from './app.po';

describe('lu.web.core App', () => {
  let page: LU.Web.CorePage;

  beforeEach(() => {
    page = new LU.Web.CorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
