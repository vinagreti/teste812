import { AppLanguage } from './../app/models/language';

export interface AppEnvironment {
  appName: string;
  basePath: string;
  debug: boolean;
  defaultLanguage: AppLanguage;
  extraLanguages: AppLanguage[];
  name: string;
  production: boolean;
  serverPort: number;
  [key: string]: any;
}

export const EnvBaseConfig: AppEnvironment = {
  appName: 'teste812',
  basePath: '',
  debug: false,
  defaultLanguage: AppLanguage.EN,
  extraLanguages: [],
  name: 'BaseEnvironment',
  serverPort: 4200,
  production: false,
};
