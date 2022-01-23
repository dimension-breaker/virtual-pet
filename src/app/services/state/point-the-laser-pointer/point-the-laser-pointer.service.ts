import { Injectable } from '@angular/core';
import { StateService } from '../state.service';

@Injectable({
  providedIn: 'root'
})
export class PointTheLaserPointerService extends StateService {
  constructor() {
    super();
  }

  execute(image: string): string {
    if (image === this.eatingCat || image === this.sleepyCat) {
      return image;
    }

    return this.runningCat;
  }
}
