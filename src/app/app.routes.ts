import { Routes } from '@angular/router';
import { PersonDetail } from './Components/person-detail/person-detail';
import { Home } from './Components/home/home';
import { NotFoundError } from '@angular/core/primitives/di';

export const routes: Routes = [
    { path: "", component: Home},
    { path: 'person/:id', component: PersonDetail },
    { path: '**', component: NotFoundError  }

    // make redirect to error page
  
];
