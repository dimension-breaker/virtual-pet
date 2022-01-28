import { Injectable } from '@angular/core';
import { CleanService } from './state/clean.service';
import { DoNothingService } from './state/do-nothing.service';
import { FeedService } from './state/feed.service';
import { HugService } from './state/hug.service';
import { LaserBeamService } from './state/laser-beam.service';
import { SleepService } from './state/sleep.service';

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
    new DoNothingService(),
    new CleanService(),
    new FeedService(),
    new HugService(),
    new LaserBeamService(),
    new SleepService()
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
