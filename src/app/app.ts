import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonService } from './Services/person-service';
import { TeamService } from './Services/team-service';
import { CompetitionService } from './Services/competition-service';
import { Person } from "./Components/person/person";
import { Competition } from "./Components/competition/competition";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Person, Competition],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //private readonly matchService = inject(MatchService);
  private readonly personService = inject(PersonService);
  private readonly teamService = inject(TeamService);
  private readonly competitionService = inject(CompetitionService);
  title = 'EPL-Stats';

  constructor(){
/*     this.matchService.getAllMatches().subscribe({
      next: (res) => console.log('✅ Matches:', res),
      error: (err) => console.error('❌ Error:', err)
    }); */
/*     this.personService.getPerson(44).subscribe({
        next: (person) => console.log('✅ Loaded person:', person),
        error: (err) => console.error('❌ Error:', err)
    }); */
/*         this.teamService.getTeam(44).subscribe({
          next: (team) => console.log('✅ Loaded team:', team),
          error: (err) => console.error('❌ Error:', err)
    }); */
/*      this.competitionService.getCompetition("PL").subscribe({
          next: (competition) => console.log('✅ Loaded competition:', competition),
          error: (err) => console.error('❌ Error:', err)
  }); */
}
}