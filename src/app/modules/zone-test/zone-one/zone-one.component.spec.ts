import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneOneComponent } from './zone-one.component';

describe('ZoneOneComponent', () => {
  let component: ZoneOneComponent;
  let fixture: ComponentFixture<ZoneOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
