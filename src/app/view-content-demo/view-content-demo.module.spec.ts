import { ViewContentDemoModule } from './view-content-demo.module';

describe('ViewContentDemoModule', () => {
  let viewContentDemoModule: ViewContentDemoModule;

  beforeEach(() => {
    viewContentDemoModule = new ViewContentDemoModule();
  });

  it('should create an instance', () => {
    expect(viewContentDemoModule).toBeTruthy();
  });
});
