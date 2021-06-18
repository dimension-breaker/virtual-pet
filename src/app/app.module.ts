import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VisualStateComponent } from './components/visual-state/visual-state.component';
import { ButtonComponent } from './components/button/button.component';
import { VerbalStateComponent } from './components/verbal-state/verbal-state.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualStateComponent,
    ButtonComponent,
    VerbalStateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
