import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpPakistanComponent } from './erp-pakistan.component';

describe('ErpPakistanComponent', () => {
  let component: ErpPakistanComponent;
  let fixture: ComponentFixture<ErpPakistanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpPakistanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpPakistanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
