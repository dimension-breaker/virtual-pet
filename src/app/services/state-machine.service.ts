import { Injectable } from '@angular/core';
import { CleanService } from './state/clean.service';
import { DecayService } from './state/decay.service';
import { FeedService } from './state/feed.service';
import { HugService } from './state/hug.service';
import { PointTheLaserPointerService } from './state/point-the-laser-pointer.service';
import { PutToSleepService } from './state/put-to-sleep.service';

@Injectable({
  providedIn: 'root'
})
export class StateMachineService {
  buttonTexts = [
    "decay",
    "clean",
    "feed",
    "hug",
    "point the laser pointer",
    "put to sleep"
  ]
  protected states = [
    new DecayService(),
    new CleanService(),
    new FeedService(),
    new HugService(),
    new PointTheLaserPointerService(),
    new PutToSleepService()
  ]
  protected image: string = this.states[0].afkCat;

  execute(state: string): void {
    this.image = this.states[this.buttonTexts.indexOf(state)].execute(this.image);
  }

  getImage(): string {
    return this.image;
  }

  getBubble(): string {
    return "candy is " + this.image.substring(this.image.lastIndexOf("/") + 1, this.image.lastIndexOf("C")).toLowerCase();
  }
}
