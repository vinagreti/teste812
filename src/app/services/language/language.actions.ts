import { AppLanguage } from '@models/language';

export class ASetLanguage {
  public static readonly type = '[Language] Set language';
  constructor(public language: AppLanguage) { }
}
