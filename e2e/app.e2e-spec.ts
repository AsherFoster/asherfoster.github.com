import { AsherfosterPage } from './app.po';

describe('asherfoster App', () => {
  let page: AsherfosterPage;

  beforeEach(() => {
    page = new AsherfosterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to af!!');
  });
});
