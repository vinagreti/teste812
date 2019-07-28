import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { TranslateInterceptorService } from '@services/language';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TranslateInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
