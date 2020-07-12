import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTrainLocationComponent } from './live-train-location.component';

describe('LiveTrainLocationComponent', () => {
  let component: LiveTrainLocationComponent;
  let fixture: ComponentFixture<LiveTrainLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTrainLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTrainLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
