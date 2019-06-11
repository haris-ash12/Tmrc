import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsNavComponent } from './dynamics-nav.component';

describe('DynamicsNavComponent', () => {
  let component: DynamicsNavComponent;
  let fixture: ComponentFixture<DynamicsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
