import { TestBed } from '@angular/core/testing';
import { HugService } from './hug.service';


describe('HugService', () => {
  let service: HugService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HugService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
