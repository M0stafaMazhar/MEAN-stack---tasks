import { TestBed } from '@angular/core/testing';

import { GolbalService } from './golbal.service';

describe('GolbalService', () => {
  let service: GolbalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GolbalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
