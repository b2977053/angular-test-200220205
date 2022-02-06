import { TestBed } from '@angular/core/testing';

import { TravelTaipeiService } from './travel-taipei.service';

describe('TravelTaipeiService', () => {
  let service: TravelTaipeiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelTaipeiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
