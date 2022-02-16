import { Component } from '@angular/core';

@Component({
  selector: 'app-graveyard',
  templateUrl: './graveyard.component.html',
  styleUrls: ['./graveyard.component.css']
})
export class GraveyardComponent {
  public isMidnight: boolean
  public graveyardTop: (string | undefined)[]
  public graveyardLeft: (string | undefined)[]
  public zombie: (string | undefined)[]

  public constructor() {
    this.isMidnight = false
    this.graveyardTop = ['10%', '10%', '50%', '50%']
    this.graveyardLeft = ['10%', '70%', '10%', '70%']
    this.zombie = ['OwO', 'the power of friendship', 'meow', 'nya~', 'butterfly sparkles']

    setInterval(() => {
      this.isMidnight = !this.isMidnight;

      if (!this.isMidnight) {
        this.graveyardTop.push(this.graveyardTop.shift())
        this.graveyardLeft.push(this.graveyardLeft.shift())
        this.zombie.push(this.zombie.shift())
      }
    }, 4000)
  }
}
