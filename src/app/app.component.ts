import { Component } from '@angular/core';
import { interval, Observable, Subscription } from "rxjs";
import { StateMachineService } from './services/state-machine/state-machine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stateMachineService: StateMachineService = new StateMachineService();
  image: string = this.stateMachineService.getImage();
  bubble: string = this.stateMachineService.getBubble();
  
  waitTime: number = 5000;
  timeIncrement: number = 125;
  minProgress: number = 0;
  maxProgress: number = 100;
  progress: number = 0;

  decayCounter: Observable<number> = interval(this.timeIncrement);
  subscription: Subscription = this.decayCounter.subscribe((i) => this.tick());

  tick(): void {
    if (this.progress >= this.maxProgress) {
      this.execute(this.stateMachineService.buttonTexts[0]);
    }

    this.progress += this.maxProgress / (this.waitTime / this.timeIncrement);
  }

  onClick(buttonText: string): void {
    this.execute(buttonText);

    this.subscription.unsubscribe();
    this.subscription = this.decayCounter.subscribe((i) => this.tick());
  }

  execute(state: string): void {
    this.stateMachineService.execute(state)
    this.image = this.stateMachineService.getImage();
    this.bubble = this.stateMachineService.getBubble();

    this.progress = this.minProgress;
  }
}
