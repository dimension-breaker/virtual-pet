import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonText: string = "";
  @Output() buttonClick: EventEmitter<string> = new EventEmitter();

  onClick(): void {
    this.buttonClick.emit(this.buttonText);
  }
}
