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

  it('should get language from url if valid', () => {
    const service: any = TestBed.get(LanguageService);
    service.location = {path: () => '/en/home'};
    const urlLanguage = service.getStartupLanguage();
    expect(urlLanguage).toEqual('en');
  });

  it('should not get language from url if invalid', () => {
    const service: any = TestBed.get(LanguageService);
    service.location = {path: () => '/xyz-invalid/home'};
    const urlLanguage = service.detectLanguageInUrl();
    expect(urlLanguage).toBeUndefined();
  });

  it('should get language from url if default', () => {
    pending();
  });

  it('should get language from url if not default', () => {
    pending();
  });

  it('should set language in the url if not the default', () => {
    pending();
  });

  it(`should set naked language in url if default (default doesn't need to be explicit)`, () => {
    pending();
  });

  it(`should not navigate if language is not set on environment.extraLanguages`, () => {
    pending();
  });
});
