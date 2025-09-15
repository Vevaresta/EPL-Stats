import { Component } from '@angular/core';
import { TopPerformingTeams } from "../top-performing-teams/top-performing-teams";
import { Person } from "../person/person";
import { Match } from "../match/match";

@Component({
  selector: 'app-home',
  imports: [TopPerformingTeams, Person, Match],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
