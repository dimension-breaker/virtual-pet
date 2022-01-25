import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class DecayService extends StateService {
  constructor() {
    super();
  }

  execute(image: string): string {
    switch (image) {
      case this.afkCat:
        return this.random([this.angryCat, this.angryCat, this.eatingCat, this.sleepyCat]);
      case this.angryCat:
        return this.random([this.afkCat, this.deadCat]);
      case this.deadCat:
        return this.deadCat;
      case this.eatingCat:
        return this.random([this.afkCat, this.sleepyCat]);
      case this.happyCat:
        return this.afkCat;
      case this.runningCat:
        return this.random([this.angryCat, this.sleepyCat]);
      case this.sleepyCat:
        return this.random([this.afkCat, this.happyCat, this.deadCat, this.sleepyCat]);
      default:
        return this.random([this.afkCat, this.angryCat, this.deadCat, this.sleepyCat]);
    }
  }
}
