import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class LaserBeamService extends StateService {
  public constructor() {
    super();

    this.newState = {
      hungryCat: [this.hungryCat],
      sleepyCat: [this.sleepyCat],
      null: [this.fastCat]
    }
  }
}
