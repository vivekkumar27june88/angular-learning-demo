import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDynamicCompComponent } from './demo-dynamic-comp.component';

describe('DemoDynamicCompComponent', () => {
  let component: DemoDynamicCompComponent;
  let fixture: ComponentFixture<DemoDynamicCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDynamicCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDynamicCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
