import { TestBed } from '@angular/core/testing';

import { AmaService } from './ama.service';

describe('AmaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmaService = TestBed.get(AmaService);
    expect(service).toBeTruthy();
  });
});
