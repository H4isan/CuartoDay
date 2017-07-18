import { CuartoDiaPage } from './app.po';

describe('cuarto-dia App', () => {
  let page: CuartoDiaPage;

  beforeEach(() => {
    page = new CuartoDiaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
