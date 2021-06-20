import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from "@angular/material/progress-bar";

import { AppComponent } from './app.component';
import { ImageComponent } from './components/image/image.component';
import { BubbleComponent } from './components/bubble/bubble.component';
import { ButtonComponent } from './components/button/button.component';
import { GraveyardComponent } from './components/graveyard/graveyard.component';
import { VirtualPetComponent } from './components/virtual-pet/virtual-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    BubbleComponent,
    ButtonComponent,
    GraveyardComponent,
    VirtualPetComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
