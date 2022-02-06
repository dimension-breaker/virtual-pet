import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class SleepService extends StateService {
  public constructor() {
    super();

    this.newState = {
      null: [this.angryCat, this.deadCat, this.sleepyCat]
    }
  }
}
