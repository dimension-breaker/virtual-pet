import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class SleepService extends StateService {
  constructor() {
    super();
  }

  execute(image: string): string {
    return this.random([this.angryCat, this.deadCat, this.sleepyCat]);
  }
}
