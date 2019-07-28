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

  it('should set language to PT', (done) => {
    const service: any = TestBed.get(LanguageService);
    service.setLanguageInStore(AppLanguage.PT).subscribe(res => {
      expect(service.language).toEqual(AppLanguage.PT);
      done();
    });
  });

  it('should set language to EN', (done) => {
    const service: any = TestBed.get(LanguageService);
    service.setLanguageInStore(AppLanguage.EN).subscribe(res => {
      expect(service.language).toEqual(AppLanguage.EN);
      done();
    });
  });

  it('should fallback to browsers language if storage is not defined', (done) => {
    const service: any = TestBed.get(LanguageService);
    service.localeId = AppLanguage.EN;
    service.setLanguageInStore(undefined).subscribe(res => {
      const language = service.getStartupLanguage();
      expect(language).toEqual(AppLanguage.EN);
      done();
    });
  });

  it('should fallback to default language if storage and browser language are not defined', (done) => {
    const service: any = TestBed.get(LanguageService);
    service.localeId = undefined;
    service.setLanguageInStore(undefined).subscribe(res => {
      const language = service.getStartupLanguage();
      expect(language).toEqual(AppLanguage.EN);
      done();
    });
  });
});
