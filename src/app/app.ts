import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatchService } from './Services/match-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private readonly matchService = inject(MatchService);
  title = 'EPL-Stats';

  constructor(){
    this.matchService.getAllMatches().subscribe({
      next: (res) => console.log('✅ Matches:', res),
      error: (err) => console.error('❌ Error:', err)
    });
  }
}
