import { Injectable } from '@angular/core';
import { CleanService } from './state/clean.service';
import { DoNothingService } from './state/do-nothing.service';
import { FeedService } from './state/feed.service';
import { HugService } from './state/hug.service';
import { LaserBeamService } from './state/laser-beam.service';
import { SleepService } from './state/sleep.service';
import { StateService } from './state/state.service';

@Injectable({
  providedIn: 'root'
})
export class StateMachineService {
  private image: string = 'assets/AFKCat.gif'
  private click: { [button: string]: StateService } = {
    'clean': new CleanService(),
    'do nothing': new DoNothingService(),
    'feed': new FeedService(),
    'hug': new HugService(),
    'laser beam': new LaserBeamService(),
    'sleep': new SleepService()
  }

  public getImage(): string { return this.image }

  public getText(): string {
    let start = this.image.lastIndexOf('/') + 1
    let mid = this.image.lastIndexOf('C')
    let end = this.image.lastIndexOf('.')
    return this.image.substring(start, mid) + ' ' + this.image.substring(mid, end)
  }

  public getButtons(): string[] { return Object.keys(this.click).filter(function(value) { return value != 'do nothing' }) }

  public clickButton(button: string): void { this.image = this.click[button].applyTo(this.image) }
}
