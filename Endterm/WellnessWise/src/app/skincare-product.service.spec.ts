import { TestBed } from '@angular/core/testing';

import { SkincareProductService } from './skincare-product.service';

describe('SkincareProductService', () => {
  let service: SkincareProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkincareProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
