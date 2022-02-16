import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GraveyardComponent } from './graveyard.component';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, GraveyardComponent],
  imports: [BrowserModule]
})
export class AppModule {}
