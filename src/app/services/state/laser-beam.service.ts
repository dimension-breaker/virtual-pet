import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class LaserBeamService extends StateService {
  constructor() {
    super();
  }

  execute(image: string): string {
    if (image === this.hungryCat || image === this.sleepyCat) {
      return image;
    }

    return this.fastCat;
  }
}
