import { Component, inject } from '@angular/core';
import { PersonService } from '../../Services/person-service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './person-detail.html',
  styleUrl: './person-detail.css'
})
export class PersonDetail {

    private readonly personService = inject(PersonService);
    private readonly route = inject(ActivatedRoute);

    readonly personId = Number(this.route.snapshot.paramMap.get("id"));

    readonly person = toSignal(
      this.personService.getPerson(this.personId),
      { initialValue: null}
    )
}
