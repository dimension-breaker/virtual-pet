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

  public constructor() {
    this.stateMachineService = new StateMachineService()
    this.buttons = {
      'btn-outline-warning': this.stateMachineService.getButtons()[0],
      'btn-outline-primary': this.stateMachineService.getButtons()[1],
      'btn-outline-danger': this.stateMachineService.getButtons()[2],
      'btn-outline-dark': this.stateMachineService.getButtons()[3],
      'btn-outline-success': this.stateMachineService.getButtons()[4]
    }
  }

  public clickButton(button: string): void { this.stateMachineService.clickButton(button) }
}
