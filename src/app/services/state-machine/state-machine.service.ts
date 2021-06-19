import { Injectable } from '@angular/core';
import { CleanService } from '../state/clean/clean.service';
import { DecayService } from '../state/decay/decay.service';
import { FeedService } from '../state/feed/feed.service';
import { HugService } from '../state/hug/hug.service';
import { PointTheLaserPointerService } from '../state/point-the-laser-pointer/point-the-laser-pointer.service';
import { PutToSleepService } from '../state/put-to-sleep/put-to-sleep.service';

@Injectable({
  providedIn: 'root'
})
export class StateMachineService {
  buttons = [
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
  protected image: string = "../../../assets/AFKCat.gif";

  execute(state: string): void {
    this.image = this.states[this.buttons.indexOf(state)].execute(this.image);
  }

  getImage(): string {
    return this.image;
  }

  getBubble(): string{
    return "candy is " + this.image.substring(this.image.lastIndexOf("/") + 1, this.image.lastIndexOf("C"));
  }
}
