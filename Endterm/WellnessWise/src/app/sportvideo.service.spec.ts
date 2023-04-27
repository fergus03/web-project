import { TestBed } from '@angular/core/testing';

import { SportvideoService } from './sportvideo.service';

describe('SportvideoService', () => {
  let service: SportvideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportvideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
