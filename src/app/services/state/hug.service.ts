import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class HugService extends StateService {
  public constructor() {
    super();

    this.newState = {
      deadCat: [this.deadCat],
      null: [this.afkCat, this.angryCat, this.afkCat, this.angryCat, this.deadCat]
    }
  }
}
