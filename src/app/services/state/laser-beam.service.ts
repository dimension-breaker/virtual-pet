import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class LaserBeamService extends StateService {
  public constructor() {
    super()

    this.newState[this.hungryCat] = [this.hungryCat]
    this.newState[this.sleepyCat] = [this.sleepyCat]
    this.newState[''] = [this.fastCat]
  }
}
