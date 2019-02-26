import { AppPage } from './app.po';


describe('ng5-create-routes App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home page', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Home Page');
  });

  it('should display about button', () => {
    expect(page.getAboutButton().getText()).toEqual('About')
  });

  it('should route to about page', () => {
    page.getAboutButton().click();
    expect(page.getAboutText()).toEqual('About Page')
  });

  it('should route to home page', () => {
    page.getHomeButton().click();
    expect(page.getHometext()).toEqual('Home Page')
  });

  it('should route to user list', () => {
    page.getUserButton().click();
    expect(page.getUserText()).toEqual('User List')
  });
});
