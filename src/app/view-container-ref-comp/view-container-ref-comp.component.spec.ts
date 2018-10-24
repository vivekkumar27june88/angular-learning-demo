import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContainerRefCompComponent } from './view-container-ref-comp.component';

describe('ViewContainerRefCompComponent', () => {
  let component: ViewContainerRefCompComponent;
  let fixture: ComponentFixture<ViewContainerRefCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContainerRefCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContainerRefCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
