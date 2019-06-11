import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsDemoRequestComponent } from './dynamics-demo-request.component';

describe('DynamicsDemoRequestComponent', () => {
  let component: DynamicsDemoRequestComponent;
  let fixture: ComponentFixture<DynamicsDemoRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsDemoRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsDemoRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
