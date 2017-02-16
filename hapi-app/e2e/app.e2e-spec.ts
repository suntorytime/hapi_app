import { HapiAppPage } from './app.po';

describe('hapi-app App', function() {
  let page: HapiAppPage;

  beforeEach(() => {
    page = new HapiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
