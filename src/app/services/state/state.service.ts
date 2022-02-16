import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class StateService {
  protected afkCat: string = 'assets/AFKCat.gif';
  protected angryCat: string = 'assets/AngryCat.gif';
  protected fastCat: string = 'assets/FastCat.gif';
  protected deadCat: string = 'assets/DeadCat.gif';
  protected hungryCat: string = 'assets/HungryCat.gif';
  protected happyCat: string = 'assets/HappyCat.gif';
  protected sleepyCat: string = 'assets/SleepyCat.gif';
  protected wetCat: string = 'assets/WetCat.gif';

  protected newState!: { [state: string]: string[] }
  protected constructor() { this.newState = {} }

  public applyTo(image: string): string {
    let newState = image in this.newState ? this.newState[image] : this.newState['']
    return newState[Math.floor(Math.random() * newState.length)]
  }
}
