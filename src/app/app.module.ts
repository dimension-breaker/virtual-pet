import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GraveyardComponent } from './graveyard.component';


@NgModule({
  declarations: [
    AppComponent,
    GraveyardComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
