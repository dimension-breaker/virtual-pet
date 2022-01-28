import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class StateService {
  afkCat: string = "assets/AFKCat.gif";
  angryCat: string = "assets/AngryCat.gif";
  fastCat: string = "assets/FastCat.gif";
  deadCat: string = "assets/DeadCat.gif";
  hungryCat: string = "assets/HungryCat.gif";
  happyCat: string = "assets/HappyCat.gif";
  sleepyCat: string = "assets/SleepyCat.gif";
  wetCat: string = "assets/WetCat.gif";

  abstract execute(image: string): string;

  protected random(state: string[]): string {
    return state[Math.floor(Math.random() * state.length)];
  }
}
