import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsTransportationComponent } from './logistics-transportation.component';

describe('LogisticsTransportationComponent', () => {
  let component: LogisticsTransportationComponent;
  let fixture: ComponentFixture<LogisticsTransportationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsTransportationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
