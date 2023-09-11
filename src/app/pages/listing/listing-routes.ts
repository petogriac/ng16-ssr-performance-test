import { Routes } from '@angular/router';
import { ListingComponent } from './listing.component';

export const LIST_ROUTES: Routes = [
  {
    path: ':listDelay',
    children: [
      {
        path: '**',
        component: ListingComponent,
      }
    ]
  }
]
