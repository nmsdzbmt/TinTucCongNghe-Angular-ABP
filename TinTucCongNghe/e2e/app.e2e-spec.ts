import { TinTucCongNgheTemplatePage } from './app.po';

describe('TinTucCongNghe App', function() {
  let page: TinTucCongNgheTemplatePage;

  beforeEach(() => {
    page = new TinTucCongNgheTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
