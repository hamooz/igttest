import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SlideshowjumboComponent } from './slideshowjumbo/slideshowjumbo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    SlideshowjumboComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
