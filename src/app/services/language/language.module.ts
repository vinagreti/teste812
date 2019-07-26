import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { environment } from '@env/environment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageService } from './language.service';

export const GLOBAL_TRANSLATION_PATH = `${environment.basePath}/assets/i18n/location.`;

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, GLOBAL_TRANSLATION_PATH, '.json');
}

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    })
  ],
  providers: [
    LanguageService
  ],
})
export class LanguageModule {

  constructor(
    private appTranslateService: LanguageService, // starts the service and set initial language,
    @Optional() @SkipSelf() parentModule: LanguageModule,
  ) {
    if (parentModule) {
      throw new Error('LanguageModule is a Singleton module and is already being used by CoreModule. For tests use LanguageTestingModule');
    }
  }

}
