import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class HugService extends StateService {
  constructor() {
    super();
  }
  execute(image: string): string {
    if (image === this.deadCat) {
      return image;
    }

    return this.random([this.afkCat, this.angryCat, this.afkCat, this.angryCat, this.deadCat]);
  }
}
