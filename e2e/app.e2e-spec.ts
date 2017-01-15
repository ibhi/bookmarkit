import { BookmarkitPage } from './app.po';

describe('bookmarkit App', function() {
  let page: BookmarkitPage;

  beforeEach(() => {
    page = new BookmarkitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
