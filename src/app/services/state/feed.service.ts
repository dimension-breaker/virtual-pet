import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService extends StateService {
  constructor() {
    super();
  }
  execute(image: string): string {
    return this.random([this.deadCat, this.eatingCat, this.eatingCat, this.eatingCat]);
  }
}
