import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { NativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    CoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NativeDateModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    this.enableLanguages();
  }

  private enableLanguages() {
    const enabledLanguages = [environment.defaultLanguage, ...environment.extraLanguages];
    enabledLanguages.forEach(language => {
      import(`@angular/common/locales/${language}.js`).then(locale => {
        import(`@angular/common/locales/extra/${language}.js`).then(extras => {
          registerLocaleData(locale.default, language, extras.default);
        });
      });
    });
  }

}
