import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamics365BusinessCentralComponent } from './dynamics365-business-central.component';

describe('Dynamics365BusinessCentralComponent', () => {
  let component: Dynamics365BusinessCentralComponent;
  let fixture: ComponentFixture<Dynamics365BusinessCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dynamics365BusinessCentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamics365BusinessCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
