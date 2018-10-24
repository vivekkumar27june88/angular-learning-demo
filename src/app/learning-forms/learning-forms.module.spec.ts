import { LearningFormsModule } from './learning-forms.module';

describe('LearningFormsModule', () => {
  let learningFormsModule: LearningFormsModule;

  beforeEach(() => {
    learningFormsModule = new LearningFormsModule();
  });

  it('should create an instance', () => {
    expect(learningFormsModule).toBeTruthy();
  });
});
