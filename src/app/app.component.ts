import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'adz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
