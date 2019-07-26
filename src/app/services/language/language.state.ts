import { AppLanguage } from '@models/language';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { getStartupLanguage } from './functions';
import { ASetLanguage } from './language.actions';

export interface LanguageStateModel {
  language: AppLanguage;
}

@State<LanguageStateModel>({
  name: 'language',
  defaults: {
    language: getStartupLanguage()
  }
})
export class LanguageState {

  @Selector()
  public static getState(state: LanguageStateModel) {
    return state;
  }

  @Selector()
  public static language(state: LanguageStateModel) {
    return state.language;
  }

  @Action(ASetLanguage)
  public add(ctx: StateContext<LanguageStateModel>, { language }: ASetLanguage) {
    ctx.patchState({language});
  }
}
