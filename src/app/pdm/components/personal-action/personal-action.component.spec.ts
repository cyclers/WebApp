import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalActionComponent } from './personal-action.component';

describe('PersonalActionComponent', () => {
  let component: PersonalActionComponent;
  let fixture: ComponentFixture<PersonalActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
