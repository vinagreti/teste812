import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppWrapperDefaultComponent, AppWrapperDefaultModule } from '@components/layout/app-wrapper-default';


const routes: Routes = [
  { path: '', component: AppWrapperDefaultComponent, children: [
    { path: '', loadChildren: () =>  import('./home/home.module').then(mod => mod.HomeModule) },
    { path: '**', loadChildren: () =>  import('./static/not-found-page/not-found-page.module').then(mod => mod.NotFoundPageModule) },
  ] },
];

@NgModule({
  imports: [
    AppWrapperDefaultModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
