import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { environment } from '@env/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule, NGXS_PLUGINS } from '@ngxs/store';
import { ClearStoreReaducer } from './ngxs-logout-clean.reducer';
import { NGXS_GLOBAL_STATES } from './ngxs.global.states';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot(NGXS_GLOBAL_STATES, {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({ name: 'App store', disabled: !environment.debug || environment.production }),
    NgxsLoggerPluginModule.forRoot({ disabled: !environment.debug || environment.production || true }),
  ],
  providers: [
    { provide: NGXS_PLUGINS, useValue: ClearStoreReaducer, multi: true }
  ]
})
export class AppNgxsSingletonModule {
  constructor(@Optional() @SkipSelf() parentModule: AppNgxsSingletonModule) {
    if (parentModule) {
      throw new Error(
        'NgxsSingletonModule is already loaded. Import it in the CoreModule only');
    }
  }
}
