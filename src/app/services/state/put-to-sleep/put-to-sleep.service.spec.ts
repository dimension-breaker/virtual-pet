import { TestBed } from '@angular/core/testing';
import { PutToSleepService } from './put-to-sleep.service';


describe('PutToSleepService', () => {
  let service: PutToSleepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutToSleepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
