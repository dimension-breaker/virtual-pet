import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-verbal-state',
  templateUrl: './verbal-state.component.html',
  styleUrls: ['./verbal-state.component.css']
})
export class VerbalStateComponent implements OnInit {
  @Input() text: string = "candy is afk"

  constructor() { }

  ngOnInit(): void {
  }

}
