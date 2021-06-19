import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visual-state',
  templateUrl: './visual-state.component.html',
  styleUrls: ['./visual-state.component.css']
})
export class VisualStateComponent implements OnInit {
  @Input() image: string = "../../../assets/AFKCat.gif";
  
  constructor() { }

  ngOnInit(): void {
  }

}
