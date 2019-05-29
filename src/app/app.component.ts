import { Component } from '@angular/core';
import {MenubarComponent} from 'app/menubar/menubar.component';
import {SlideshowjumboComponent} from 'app/slideshowjumbo/slideshowjumbo.component';
import {FourcardsComponent} from 'app/fourcards/fourcards.component';
import {NewsletterformComponent} from 'app/newsletterform/newsletterform.component';
import {FooterComponent} from 'app/footer/footer.component';
import {TwocardsComponent} from 'app/twocards/twocards.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app works!';
}
