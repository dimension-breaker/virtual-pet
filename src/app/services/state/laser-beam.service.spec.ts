import { TestBed } from '@angular/core/testing';
import { LaserBeamService } from './laser-beam.service';


describe('LaserBeamService', () => {
  let service: LaserBeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaserBeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
