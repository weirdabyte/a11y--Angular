import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextImageComponent } from './text-image/text-image.component';
import { VideoComponent } from './video/video.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    TextImageComponent,
    VideoComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
