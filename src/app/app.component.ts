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

  decayCounter: Observable<number> = interval(2500);
  subscription: Subscription = this.decayCounter.subscribe((i) => this.tick());

  tick(): void {
    this.stateMachineService.execute(this.stateMachineService.buttons[0])
    this.image = this.stateMachineService.getImage();
    this.bubble = this.stateMachineService.getBubble();
  }

  onClick(buttonText: string): void {
    this.subscription.unsubscribe();
    this.subscription = this.decayCounter.subscribe((i) => this.tick());

    this.stateMachineService.execute(buttonText)
    this.image = this.stateMachineService.getImage();
    this.bubble = this.stateMachineService.getBubble();
  }
}
