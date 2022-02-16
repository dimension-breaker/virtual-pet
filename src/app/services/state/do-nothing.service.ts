import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class DoNothingService extends StateService {
  public constructor() {
    super()

    this.newState[this.afkCat] = [this.angryCat, this.angryCat, this.hungryCat, this.sleepyCat]
    this.newState[this.angryCat] = [this.afkCat, this.deadCat]
    this.newState[this.deadCat] = [this.deadCat]
    this.newState[this.hungryCat] = [this.afkCat, this.sleepyCat]
    this.newState[this.happyCat] = [this.afkCat]
    this.newState[this.fastCat] = [this.angryCat, this.sleepyCat]
    this.newState[this.sleepyCat] = [this.afkCat, this.happyCat, this.deadCat, this.sleepyCat]
    this.newState[''] = [this.afkCat, this.happyCat, this.deadCat, this.sleepyCat]
  }
}
