import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class CleanService extends StateService {
  public constructor() {
    super();

    this.newState = {
      deadCat: [this.deadCat],
      null: [this.angryCat, this.wetCat]
    }
  }
}
