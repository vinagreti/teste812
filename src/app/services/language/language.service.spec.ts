import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '@env/environment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './language.module';
import { LanguageService } from './language.service';
import { LanguageServiceTestingModule } from './testing';

describe('LanguageService', () => {

  const defaultLanguage = environment.defaultLanguage;
  const extraLanguage = environment.extraLanguages[0];

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      LanguageServiceTestingModule,
      HttpClientTestingModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        },
      }),
    ]
  }));

  it('should be created', () => {
    // given
    const service: LanguageService = TestBed.get(LanguageService);
    // then
    expect(service).toBeTruthy();
  });

  it('should get language', () => {
    // given
    const service: LanguageService = TestBed.get(LanguageService);
    // when
    const language = service.language;
    // then
    expect(language).toBeTruthy();
  });

  it('should set language', (done) => {
    // given
    const service: LanguageService = TestBed.get(LanguageService);
    // when
    const changeRespose = service.setLanguage(extraLanguage);
    // then
    changeRespose.subscribe(() => {
      const language = service.language;
      expect(language).toEqual(extraLanguage);
      done();
    });
  });

  it('should set language and persist in url', (done) => {
    // given
    const service: any = TestBed.get(LanguageService);
    // when
    service.location = {path: () => '/home/two/three'};
    const changeRespose = service.setLanguage(extraLanguage);
    // then
    changeRespose.subscribe(() => {
      const language = service.language;
      expect(language).toEqual(extraLanguage);
      done();
    });
  });

  it('should override language in url', (done) => {
    // given
    const service: any = TestBed.get(LanguageService);
    // when
    service.location = {path: () => `/${defaultLanguage}/two/three`};
    const changeRespose = service.setLanguage(extraLanguage);
    // then
    changeRespose.subscribe(() => {
      const newPath = service.mountI18nPath(extraLanguage);
      expect(newPath).toEqual(`/${extraLanguage}/two/three`);
      done();
    });
  });

  it('should set language in url when setLanguage is called', () => {
    // given
    const service: any = TestBed.get(LanguageService);
    // when
    const navigated = spyOn(service.ngZone, 'run').and.callThrough();
    service.setLanguage(extraLanguage);
    // then
    expect(navigated).toHaveBeenCalled();
  });

  it('should not set language in url when setLanguage is called with same language', () => {
    // given
    const service: any = TestBed.get(LanguageService);
    // when
    const navigated = spyOn(service.ngZone, 'run').and.callThrough();
    service.setLanguage(extraLanguage);
    service.setLanguage(extraLanguage);
    // then
    expect(navigated).toHaveBeenCalledTimes(1);
  });

  it('should set language in url when setLanguage is called different same language', () => {
    // given
    const service: any = TestBed.get(LanguageService);
    // when
    const navigated = spyOn(service.ngZone, 'run').and.callThrough();
    service.setLanguage(extraLanguage);
    service.setLanguage(defaultLanguage);
    // then
    expect(navigated).toHaveBeenCalledTimes(2);
  });

});
