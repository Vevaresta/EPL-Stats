import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Person } from '../Resources/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
    private readonly api = inject(ApiService)

    getPerson(id: number) {
      return this.api.get<Person>(`/persons/${id}`);
    }
}
