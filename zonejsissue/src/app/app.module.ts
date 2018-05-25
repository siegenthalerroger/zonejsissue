import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApService } from './ap.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ApService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
