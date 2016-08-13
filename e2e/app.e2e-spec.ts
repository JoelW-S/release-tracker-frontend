import { ReleaseTrackerFrontendPage } from './app.po';

describe('release-tracker-frontend App', function() {
  let page: ReleaseTrackerFrontendPage;

  beforeEach(() => {
    page = new ReleaseTrackerFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
