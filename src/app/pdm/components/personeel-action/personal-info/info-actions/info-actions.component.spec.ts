import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoActionsComponent } from './info-actions.component';

describe('InfoActionsComponent', () => {
  let component: InfoActionsComponent;
  let fixture: ComponentFixture<InfoActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
