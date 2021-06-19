import { Injectable } from '@angular/core';
import { StateService } from '../state.service';

@Injectable({
  providedIn: 'root'
})
export class CleanService extends StateService {
  constructor() {
    super();
  }

  execute(image: string): string {
    if (image === this.deadCat) {
      return image;
    }

    return this.random([this.angryCat, this.wetCat]);
  }
}
