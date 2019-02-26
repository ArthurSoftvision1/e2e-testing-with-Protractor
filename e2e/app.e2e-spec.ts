import { AppPage } from './app.po';


describe('ng5-create-routes App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home page', () => {
    page.navigateTo();
    // browser.pause();
    expect(page.getParagraphText()).toEqual('Home Page');
  });

  it('should display about button', () => {
    page.navigateTo();
    expect(page.getAboutButton().getText()).toEqual('About')
  });

  it('should route to about page', () => {
    page.navigateTo();
    page.getAboutButton().click();
    // browser.pause();
    expect(page.getAboutText()).toEqual('About Page')
  });

  it('should route to home page', () => {
    page.navigateTo();
    page.getHomeButton().click();
    expect(page.getHometext()).toEqual('Home Page')
  })
});
