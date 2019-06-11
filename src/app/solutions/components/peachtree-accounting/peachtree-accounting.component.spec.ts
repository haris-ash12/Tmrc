import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeachtreeAccountingComponent } from './peachtree-accounting.component';

describe('PeachtreeAccountingComponent', () => {
  let component: PeachtreeAccountingComponent;
  let fixture: ComponentFixture<PeachtreeAccountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeachtreeAccountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeachtreeAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
