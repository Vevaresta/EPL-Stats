import { Routes } from '@angular/router';
import { PersonDetail } from './Components/person-detail/person-detail';

export const routes: Routes = [
    {
        path: "person/:id",
        component: PersonDetail
    }
];
