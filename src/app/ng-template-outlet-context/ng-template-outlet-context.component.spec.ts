import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateOutletContextComponent } from './ng-template-outlet-context.component';

describe('NgTemplateOutletContextComponent', () => {
  let component: NgTemplateOutletContextComponent;
  let fixture: ComponentFixture<NgTemplateOutletContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgTemplateOutletContextComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateOutletContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
