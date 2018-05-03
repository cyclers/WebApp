import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWorkscheduleComponent } from './info-workschedule.component';

describe('InfoWorkscheduleComponent', () => {
  let component: InfoWorkscheduleComponent;
  let fixture: ComponentFixture<InfoWorkscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoWorkscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWorkscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
