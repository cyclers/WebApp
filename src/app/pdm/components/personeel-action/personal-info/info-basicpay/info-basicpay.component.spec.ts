import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBasicpayComponent } from './info-basicpay.component';

describe('InfoBasicpayComponent', () => {
  let component: InfoBasicpayComponent;
  let fixture: ComponentFixture<InfoBasicpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBasicpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBasicpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
