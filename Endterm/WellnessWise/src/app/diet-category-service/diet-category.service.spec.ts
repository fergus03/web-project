import { TestBed } from '@angular/core/testing';

import { DietCategoryService } from './diet-category.service';

describe('DietCategoryService', () => {
  let service: DietCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
