import { TestBed } from '@angular/core/testing';

import { PointTheLaserPointerService } from './point-the-laser-pointer.service';

describe('PointTheLaserPointerService', () => {
  let service: PointTheLaserPointerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointTheLaserPointerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
