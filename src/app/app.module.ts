import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KSLLiveFeed } from './ksl-live-feed-component/ksl-live-feed-component.component';
import { KSLFeedService }   from './ksl-feed-service.service'


@NgModule({
  declarations: [
    AppComponent,
    KSLLiveFeed
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [KSLFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
