import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamics365Component } from './dynamics365.component';

describe('Dynamics365Component', () => {
  let component: Dynamics365Component;
  let fixture: ComponentFixture<Dynamics365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dynamics365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamics365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
