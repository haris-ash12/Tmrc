import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureManagmentComponent } from './infrastructure-managment.component';

describe('InfrastructureManagmentComponent', () => {
  let component: InfrastructureManagmentComponent;
  let fixture: ComponentFixture<InfrastructureManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructureManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructureManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
