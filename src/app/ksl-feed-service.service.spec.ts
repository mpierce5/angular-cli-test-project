/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KSLFeedService } from './ksl-feed-service.service';

describe('Service: KslFeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KSLFeedService]
    });
  });

  it('should ...', inject([KSLFeedService], (service: KSLFeedService) => {
    expect(service).toBeTruthy();
  }));
});
