import { TestBed } from '@angular/core/testing';
import { LanguageAppConfigModule } from './language-app-config.module';
import { LanguageAppConfigService } from './language-app-config.service';

describe('LanguageAppConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      LanguageAppConfigModule,
    ]
  }));

  it('should be created', () => {
    const service: LanguageAppConfigService = TestBed.get(LanguageAppConfigService);
    expect(service).toBeTruthy();
  });

  it('should not reload app on server side rendering', () => {
    // given
    const service: any = TestBed.get(LanguageAppConfigService);
    // when
    service.isServer = true;
    const spy = spyOn(service.appModuleRef, 'destroy').and.callThrough();
    service.reloadMainApp();
    // then
    expect(spy).not.toHaveBeenCalled();
  });

  it('should get https://teste.com/path/en when original base href is https://teste.com/path', () => {
    // given
    const service: any = TestBed.get(LanguageAppConfigService);
    // when
    service.originalBaseHref = 'https://teste.com/path';
    const newBaseHref = service.getInitialBaseHrefTranslated('en');
    // then
    expect(newBaseHref).toEqual('https://teste.com/path/en');
  });

  it('should get https://teste.com/path/en when original base href is https://teste.com/path/', () => {
    // given
    const service: any = TestBed.get(LanguageAppConfigService);
    // when
    service.originalBaseHref = 'https://teste.com/path/';
    const newBaseHref = service.getInitialBaseHrefTranslated('en');
    // then
    expect(newBaseHref).toEqual('https://teste.com/path/en');
  });

  it('should get /en when original base href is /', () => {
    // given
    const service: any = TestBed.get(LanguageAppConfigService);
    // when
    service.originalBaseHref = '';
    const newBaseHref = service.getInitialBaseHrefTranslated('en');
    // then
    expect(newBaseHref).toEqual('/en');
  });

  it('should not saveOriginalBaseHref if in server side', () => {
    // given
    const service: any = TestBed.get(LanguageAppConfigService);
    // when
    service.isServer = true;
    service.originalBaseHref = '';
    spyOnProperty(service, 'baseHref', 'get').and.returnValue('http://teste.com/path');
    service.saveOriginalBaseHref();
    // then
    expect(service.originalBaseHref).toEqual('');
  });

});
