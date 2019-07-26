import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouterPreloader } from '@services/router/router-preloader';


const routes: Routes = [
  { path: '', loadChildren: () =>  import('./pages/home/home.module').then(mod => mod.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: AppRouterPreloader})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
