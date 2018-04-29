import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDatemilestonesComponent } from './info-datemilestones.component';

describe('InfoDatemilestonesComponent', () => {
  let component: InfoDatemilestonesComponent;
  let fixture: ComponentFixture<InfoDatemilestonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDatemilestonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDatemilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
