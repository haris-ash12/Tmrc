import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextileApparelComponent } from './textile-apparel.component';

describe('TextileApparelComponent', () => {
  let component: TextileApparelComponent;
  let fixture: ComponentFixture<TextileApparelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextileApparelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextileApparelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
