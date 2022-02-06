import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService extends StateService {
  public constructor() {
    super();

    this.newState = {
      null: [this.deadCat, this.hungryCat, this.hungryCat, this.hungryCat]
    }
  }
}
