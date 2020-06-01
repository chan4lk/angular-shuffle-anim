import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TransitionGroupComponent, TransitionGroupItemDirective } from './transition-group';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, TransitionGroupComponent, TransitionGroupItemDirective ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
