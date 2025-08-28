import { Component, inject } from '@angular/core';
import { PersonService } from '../../Services/person-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-person',
  imports: [CommonModule, RouterModule],
  templateUrl: './person.html',
  styleUrl: './person.css'
})
export class Person {
    private readonly personService = inject(PersonService);

    readonly topScorers = toSignal(
      this.personService.getTopScorers(),
      { initialValue: []}
    );

}
