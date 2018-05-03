import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoOrgassignComponent } from './info-orgassign.component';

describe('InfoOrgassignComponent', () => {
  let component: InfoOrgassignComponent;
  let fixture: ComponentFixture<InfoOrgassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoOrgassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoOrgassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
