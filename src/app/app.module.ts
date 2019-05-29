import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SlideshowjumboComponent } from './slideshowjumbo/slideshowjumbo.component';
import { FourcardsComponent } from './fourcards/fourcards.component';
import { NewsletterformComponent } from './newsletterform/newsletterform.component';
import { FooterComponent } from './footer/footer.component';
import { TwocardsComponent } from './twocards/twocards.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    SlideshowjumboComponent,
    FourcardsComponent,
    NewsletterformComponent,
    FooterComponent,
    TwocardsComponent
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
