import { TestBed } from '@angular/core/testing';
import { DecayService } from './decay.service';


describe('DecayService', () => {
  let service: DecayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
