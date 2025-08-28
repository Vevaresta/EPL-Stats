import { Component } from '@angular/core';
import { Person } from "../person/person";
import { Competition } from "../competition/competition";
import { Match } from "../match/match";

@Component({
  selector: 'app-home',
  imports: [Person, Competition, Match],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
