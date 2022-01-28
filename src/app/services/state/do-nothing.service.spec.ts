import { TestBed } from '@angular/core/testing';
import { DoNothingService } from './do-nothing.service';


describe('DoNothingService', () => {
  let service: DoNothingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoNothingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
