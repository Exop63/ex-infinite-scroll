import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExInfiniteScrollComponent } from './ex-infinite-scroll.component';

describe('ExInfiniteScrollComponent', () => {
  let component: ExInfiniteScrollComponent;
  let fixture: ComponentFixture<ExInfiniteScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExInfiniteScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExInfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
