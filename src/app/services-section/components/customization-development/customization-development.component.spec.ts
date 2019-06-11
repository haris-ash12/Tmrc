import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizationDevelopmentComponent } from './customization-development.component';

describe('CustomizationDevelopmentComponent', () => {
  let component: CustomizationDevelopmentComponent;
  let fixture: ComponentFixture<CustomizationDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizationDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizationDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
