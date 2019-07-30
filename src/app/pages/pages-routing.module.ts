import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppWrapperDefaultComponent, AppWrapperDefaultModule } from '@components/layout/app-wrapper-default';

/* NOTE: Add the pages routes here */
const pagesRoutes: Routes = [
  { path: '', loadChildren: () =>  import('./home/home.module').then(mod => mod.HomeModule) },
  { path: 'home', loadChildren: () =>  import('./home/home.module').then(mod => mod.HomeModule) },
  { path: 'home2', loadChildren: () =>  import('./home/home.module').then(mod => mod.HomeModule) },
];

// !!!: Do no change the translatedRoutes unless you are sure you know what you are doing
/* NOTE: this enables the usage of translation in URL by the LanguageModule
*/
const translatedRoutes = [
  { path: '', component: AppWrapperDefaultComponent, children: [
    { path: '', children: pagesRoutes },
    { path: ':language', children: pagesRoutes },
    { path: '**', loadChildren: () =>  import('./static/not-found-page/not-found-page.module').then(mod => mod.NotFoundPageModule) },
  ] },
];

@NgModule({
  imports: [
    AppWrapperDefaultModule,
    RouterModule.forChild(translatedRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
