import { Routes } from '@angular/router';
import { PersonDetail } from './Components/person-detail/person-detail';
import { Home } from './Components/home/home';
import { NotFoundError } from '@angular/core/primitives/di';
import { Team } from './Components/team/team';
import { LeagueTable } from './Components/league-table/league-table';
// TODO lazy loading ?
export const routes: Routes = [
    { path: "", component: Home},
    { path: 'person/:id', component: PersonDetail },
    { path: 'team/:id', component: Team },
    { path: 'league/:code', component: LeagueTable},
    { path: '**', component: NotFoundError  }

    // make redirect to error page-resolver
  
];
