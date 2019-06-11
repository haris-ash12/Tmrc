import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsAxComponent } from './dynamics-ax.component';

describe('DynamicsAxComponent', () => {
  let component: DynamicsAxComponent;
  let fixture: ComponentFixture<DynamicsAxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsAxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsAxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
