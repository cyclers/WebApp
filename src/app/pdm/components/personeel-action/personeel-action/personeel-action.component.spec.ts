import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoneelActionComponent } from './personeel-action.component';

describe('PersonalActionComponent', () => {
  let component: PersoneelActionComponent;
  let fixture: ComponentFixture<PersoneelActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoneelActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoneelActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
