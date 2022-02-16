import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class SleepService extends StateService {
  public constructor() {
    super()

    this.newState[''] = [this.angryCat, this.deadCat, this.sleepyCat]
  }
}
