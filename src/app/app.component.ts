import { Component } from '@angular/core';
import { StateMachineService } from './services/state-machine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public stateMachineService: StateMachineService
  public buttons: { [button: string]: string }
  public progress: number

  public constructor() {
    this.stateMachineService = new StateMachineService()
    this.buttons = {
      'btn-outline-warning': this.stateMachineService.getButtons()[0],
      'btn-outline-primary': this.stateMachineService.getButtons()[1],
      'btn-outline-danger': this.stateMachineService.getButtons()[2],
      'btn-outline-dark': this.stateMachineService.getButtons()[3],
      'btn-outline-success': this.stateMachineService.getButtons()[4]
    }
    this.progress = 1

    setInterval(() => {
      if (1 <= this.progress && this.progress <= 110) { // give time for the progress bar to reach the top
        this.progress += 3
      } else if (110 < this.progress) {
        this.clickButton('do nothing')
      } else if (-15 <= this.progress && this.progress <= 0) { // give time for the progress bar to reach the bottom
        this.progress -= 3
      } else if (this.progress < -15) {
        this.progress = 1
      }
    }, 100)
  }

  public clickButton(button: string): void {
    this.stateMachineService.clickButton(button)
    this.progress = 0
  }
}
