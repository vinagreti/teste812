import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouterPreloader, RouterPreloaderModule } from '@services/router/router-preloader';

const routes: Routes = [
  { path: '', loadChildren: () =>  import('./pages/pages.module').then(mod => mod.PagesModule) },
];

@NgModule({
  imports: [
    RouterPreloaderModule,
    RouterModule.forRoot(routes, {preloadingStrategy: AppRouterPreloader}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
