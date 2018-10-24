import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarativeFormComponent } from './declarative-form.component';

describe('DeclarativeFormComponent', () => {
  let component: DeclarativeFormComponent;
  let fixture: ComponentFixture<DeclarativeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeclarativeFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarativeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
