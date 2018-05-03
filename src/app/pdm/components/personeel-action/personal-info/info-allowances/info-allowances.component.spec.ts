import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAllowancesComponent } from './info-allowances.component';

describe('InfoAllowancesComponent', () => {
  let component: InfoAllowancesComponent;
  let fixture: ComponentFixture<InfoAllowancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAllowancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAllowancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
