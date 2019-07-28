import { TestBed } from '@angular/core/testing';
import { environment } from '@env/environment';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { mockReadOnlyProperties } from '@testing/functions';
import { TranslateInterceptorService } from './translate-interceptor.service';

const NEXT = {handle: () => {}};

const REQUEST_TOKEN = {
  protocol: 'http',
  hostname: 'test.com',
  url: '/assets/i18n/location-pt.json',
  clone: (token) => JSON.parse(JSON.stringify(token)),
};

describe('TranslateInterceptorService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TranslateInterceptorService,
      ModuleMapLoaderModule,
      { provide: REQUEST, useValue: REQUEST_TOKEN },
    ]
  }));

  it('should create', () => {
    const service: TranslateInterceptorService = TestBed.get(TranslateInterceptorService);
    expect(service).toBeTruthy();
  });

  it('should getBaseUrl with port', () => {
    const service: any = TestBed.get(TranslateInterceptorService);
    service.port = 123;
    service.innerRequest = REQUEST_TOKEN;
    const baseUrl = service.getBaseUrl();
    expect(baseUrl).toEqual('http://test.com:123');
  });

  it('should getBaseUrl without port', () => {
    const service: any = TestBed.get(TranslateInterceptorService);
    service.innerRequest = REQUEST_TOKEN;
    mockReadOnlyProperties(process, 'env', {PORT: '123'});
    const baseUrl = service.getBaseUrl();
    expect(baseUrl).toEqual('http://test.com');
  });

  it('should mountI18nFolderPath', () => {
    const service: any = TestBed.get(TranslateInterceptorService);
    service.innerRequest = REQUEST_TOKEN;
    service.port = undefined;
    const baseUrl = service.mountI18nFolderPath(REQUEST_TOKEN);
    expect(baseUrl).toEqual('http://test.com/assets/i18n/location-pt.json');
  });

  it('should use the default port', (done) => {
    const processEnv = process.env;
    mockReadOnlyProperties(process, 'env', undefined);
    const service: any = TestBed.get(TranslateInterceptorService);
    expect(service.port).toEqual(environment.serverPort);
    mockReadOnlyProperties(process, 'env', processEnv);
    done();
  });

  it('should intercept and not change assets url', () => {
    const service: any = TestBed.get(TranslateInterceptorService);
    const incrementSpy = spyOn(NEXT, 'handle').and.callThrough();
    service.intercept(REQUEST_TOKEN, NEXT);
    expect(incrementSpy).toHaveBeenCalled();
  });

  it('should intercept and change assets url', () => {
    const service: any = TestBed.get(TranslateInterceptorService);
    const incrementSpy = spyOn(service, 'changeRequestUrl').and.callThrough();
    service.intercept(REQUEST_TOKEN, NEXT);
    expect(incrementSpy).toHaveBeenCalled();
  });

  it('should intercept and not change assets url', () => {
    const service: any = TestBed.get(TranslateInterceptorService);
    const changeRequestUrl = spyOn(service, 'changeRequestUrl').and.callThrough();
    service.intercept(undefined, NEXT);
    expect(changeRequestUrl).not.toHaveBeenCalled();
  });

});
