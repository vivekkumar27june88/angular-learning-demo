import { StateManagementModule } from './state-management.module';

describe('StateManagementModule', () => {
  let stateManagementModule: StateManagementModule;

  beforeEach(() => {
    stateManagementModule = new StateManagementModule();
  });

  it('should create an instance', () => {
    expect(stateManagementModule).toBeTruthy();
  });
});
