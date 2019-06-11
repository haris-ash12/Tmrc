import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerGoodsComponent } from './consumer-goods.component';

describe('ConsumerGoodsComponent', () => {
  let component: ConsumerGoodsComponent;
  let fixture: ComponentFixture<ConsumerGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
