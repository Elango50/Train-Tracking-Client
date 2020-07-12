import { TestBed } from '@angular/core/testing';

import { TrainApiServiceService } from './train-api-service.service';

describe('TrainApiServiceService', () => {
  let service: TrainApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
