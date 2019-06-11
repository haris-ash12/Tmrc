import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsCrmComponent } from './dynamics-crm.component';

describe('DynamicsCrmComponent', () => {
  let component: DynamicsCrmComponent;
  let fixture: ComponentFixture<DynamicsCrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsCrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
