import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureMainComponent } from './infrastructure-main.component';

describe('InfrastructureMainComponent', () => {
  let component: InfrastructureMainComponent;
  let fixture: ComponentFixture<InfrastructureMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructureMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructureMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
