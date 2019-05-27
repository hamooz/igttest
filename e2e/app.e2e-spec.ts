import { IgttestPage } from './app.po';

describe('igttest App', function() {
  let page: IgttestPage;

  beforeEach(() => {
    page = new IgttestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
