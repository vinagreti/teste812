import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppLanguage } from '@models/language';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './language.module';
import { LanguageService } from './language.service';
import { LanguageServiceTestingModule } from './testing';


describe('LanguageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      LanguageServiceTestingModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        },
      }),
      HttpClientModule,
    ]
  }));

  it('should be created', () => {
    const service: LanguageService = TestBed.get(LanguageService);
    expect(service).toBeTruthy();
  });

  it('should get language', () => {
    const service: LanguageService = TestBed.get(LanguageService);
    expect(service.language).toBeTruthy();
  });

  it('should set language to PT', () => {
    const service: LanguageService = TestBed.get(LanguageService);
    service.language = AppLanguage.PT;
    expect(service.language).toEqual(AppLanguage.PT);
  });

  it('should set language to EN', () => {
    const service: LanguageService = TestBed.get(LanguageService);
    service.language = AppLanguage.EN;
    expect(service.language).toEqual(AppLanguage.EN);
  });
});
