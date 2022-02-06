import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class DoNothingService extends StateService {
  public constructor() {
    super();

    this.newState = {
      afkCat: [this.angryCat, this.angryCat, this.hungryCat, this.sleepyCat],
      angryCat: [this.afkCat, this.deadCat],
      deadCat: [this.deadCat],
      hungryCat: [this.afkCat, this.sleepyCat],
      happyCat: [this.afkCat],
      fastCat: [this.angryCat, this.sleepyCat],
      sleepyCat: [this.afkCat, this.happyCat, this.deadCat, this.sleepyCat],
      null: [this.afkCat, this.happyCat, this.deadCat, this.sleepyCat]
    }
  }
}
