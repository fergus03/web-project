import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMyJourneyComponent } from './start-my-journey.component';

describe('StartMyJourneyComponent', () => {
  let component: StartMyJourneyComponent;
  let fixture: ComponentFixture<StartMyJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartMyJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartMyJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
