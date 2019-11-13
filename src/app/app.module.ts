import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ResultatComponent } from './resultat/resultat.component';
import { PopupComponent } from './popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    RechercheComponent,
    ResultatComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps : [HttpClient]
      }
    })
  ],
  entryComponents: [
    PopupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
