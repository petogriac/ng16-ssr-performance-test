import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',  loadChildren: () => import('./pages/home/home-routes').then(r => r.HOME_ROUTES)},
  {path: 'l',  loadChildren: () => import('./pages/listing/listing-routes').then(r => r.LIST_ROUTES)},
  {path: 'd',  loadChildren: () => import('./pages/detail/detail-routes').then(r => r.DETAIL_ROUTES)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    bindToComponentInputs: true,
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
