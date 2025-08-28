import { Routes } from '@angular/router';
import { PersonDetail } from './Components/person-detail/person-detail';
import { Home } from './Components/home/home';

export const routes: Routes = [
    { path: "", component: Home},
    { path: 'person/:id', component: PersonDetail },
    { path: '**', redirectTo: "" }

    // make redirect to error page
  
];
