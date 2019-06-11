import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSectorComponent } from './public-sector.component';

describe('PublicSectorComponent', () => {
  let component: PublicSectorComponent;
  let fixture: ComponentFixture<PublicSectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicSectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
