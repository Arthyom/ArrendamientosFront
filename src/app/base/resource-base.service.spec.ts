import { TestBed } from '@angular/core/testing';

import { ResourceBaseService } from './resource-base.service';

describe('ResourceBaseService', () => {
  let service: ResourceBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
