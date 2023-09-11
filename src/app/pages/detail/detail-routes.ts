import { Routes } from '@angular/router';
import { DetailComponent } from './detail.component';

export const DETAIL_ROUTES: Routes = [
  {
    path: ':articleId',
    children: [
      {
        path: '**',
        component: DetailComponent,
      }
    ]
  }
]
