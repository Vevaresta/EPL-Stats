import { Component, inject } from '@angular/core';
import { PersonService } from '../../Services/person-service';

@Component({
  selector: 'app-person',
  imports: [],
  templateUrl: './person.html',
  styleUrl: './person.css'
})
export class Person {
    private readonly personService = inject(PersonService);

}
