import { Routes } from '@angular/router';
import { PersonDetail } from './Components/person-detail/person-detail';
import { Home } from './Components/home/home';
import { NotFoundError } from '@angular/core/primitives/di';
import { ClubDetail } from './Components/club-detail/club-detail';
// TODO lazy loading ?
export const routes: Routes = [
    { path: "", component: Home},
    { path: 'person/:id', component: PersonDetail },
    { path: 'club/:id', component: ClubDetail },
    { path: '**', component: NotFoundError  }

    // make redirect to error page
  
];
