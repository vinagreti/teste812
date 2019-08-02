import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppWrapperDefaultComponent, AppWrapperDefaultModule } from '@components/layout/app-wrapper-default';
import { AuthGuard, AuthGuardModule } from '@services/guards/auth';
import { NonAuthGuard, NonAuthGuardModule } from '@services/guards/non-auth';

/* NOTE: Add the pages routes here */
const routes: Routes = [
  {
    path: '',
    component: AppWrapperDefaultComponent,
    loadChildren: () =>  import('./public/public-pages.module').then(mod => mod.PublicPagesModule)
  }, {
    path: '',
    component: AppWrapperDefaultComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>  import('./private/private-pages.module').then(mod => mod.PrivatePagesModule)
  }, {
    path: '',
    component: AppWrapperDefaultComponent,
    canActivate: [NonAuthGuard],
    loadChildren: () =>  import('./non-auth/non-auth-pages.module').then(mod => mod.NonAuthPagesModule)
  }
];

@NgModule({
  imports: [
    AppWrapperDefaultModule,
    AuthGuardModule,
    NonAuthGuardModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
