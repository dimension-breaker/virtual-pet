import { Component } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-graveyard',
  templateUrl: './graveyard.component.html',
  styleUrls: ['./graveyard.component.css']
})
export class GraveyardComponent {
  isMidnight: boolean = false;
  graveyardLefts: string[] = ["10%", "80%", "10%", "80%"];
  graveyardTops: string[] = ["10%", "10%", "50%", "50%"];
  zombies: string[] = [
    "OwO",
    "the power of friendship",
    "meow",
    "nya~",
    "butterfly sparkles"
  ]

  observable: Observable<number> = interval(4000);
  subscription: Subscription = this.observable.subscribe((i) => this.tick());

  tick(): void {
    this.isMidnight = !this.isMidnight;

    if (!this.isMidnight) {
      this.shuffle(this.graveyardTops);
      this.shuffle(this.graveyardLefts);
      this.shuffle(this.zombies);  
    }
  }

  shuffle(array: string[]): void {
    let temp: any = array.shift();
    array.push(temp);
  }
}
