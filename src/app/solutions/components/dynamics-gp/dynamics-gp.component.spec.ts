import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsGpComponent } from './dynamics-gp.component';

describe('DynamicsGpComponent', () => {
  let component: DynamicsGpComponent;
  let fixture: ComponentFixture<DynamicsGpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsGpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsGpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
