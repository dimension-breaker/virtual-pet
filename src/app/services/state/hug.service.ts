import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class HugService extends StateService {
  public constructor() {
    super()

    this.newState[this.deadCat] = [this.deadCat]
    this.newState[''] = [this.afkCat, this.angryCat, this.afkCat, this.angryCat, this.deadCat]
  }
}
