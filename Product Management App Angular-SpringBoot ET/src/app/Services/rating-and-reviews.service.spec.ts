import { TestBed } from '@angular/core/testing';

import { RatingAndReviewsService } from './rating-and-reviews.service';

describe('RatingAndReviewsService', () => {
  let service: RatingAndReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingAndReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
