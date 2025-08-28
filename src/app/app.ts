import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from "./Components/person/person";
import { Competition } from "./Components/competition/competition";
import { Match } from './Components/match/match';
import { PersonDetail } from './Components/person-detail/person-detail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Person, Competition, Match,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'EPL-Stats';

  constructor(){

}
}