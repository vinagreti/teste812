/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.import { AppLanguage } from '@models/language';
import { AppLanguage } from './../app/models/language';
import { AppEnvironment } from './env-base';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: AppEnvironment = {
  appName: 'teste812',
  basePath: '',
  debug: true,
  defaultLanguage: AppLanguage.EN,
  extraLanguages: [AppLanguage.ES, AppLanguage.PT],
  name: 'development',
  serverPort: 4200,
  production: false,
};


