import { TestBed } from '@angular/core/testing';

import { AlgorithmLibService } from './algorithm-lib.service';

describe('AlgorithmLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlgorithmLibService = TestBed.get(AlgorithmLibService);
    expect(service).toBeTruthy();
  });
});
