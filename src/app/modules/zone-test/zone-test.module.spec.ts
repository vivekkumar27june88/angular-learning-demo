import { ZoneTestModule } from './zone-test.module';

describe('ZoneTestModule', () => {
  let zoneTestModule: ZoneTestModule;

  beforeEach(() => {
    zoneTestModule = new ZoneTestModule();
  });

  it('should create an instance', () => {
    expect(zoneTestModule).toBeTruthy();
  });
});
