import { Ng2GithubSearchPage } from './app.po';

describe('ng2-github-search App', function() {
  let page: Ng2GithubSearchPage;

  beforeEach(() => {
    page = new Ng2GithubSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
