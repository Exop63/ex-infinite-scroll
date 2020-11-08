import { TestBed } from '@angular/core/testing';

import { ExInfiniteScrollService } from './ex-infinite-scroll.service';

describe('ExInfiniteScrollService', () => {
  let service: ExInfiniteScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExInfiniteScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
