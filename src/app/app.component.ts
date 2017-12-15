import { Component, Injectable } from '@angular/core';
import { GamesService, GameInfo } from './games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  games: GameInfo[];

  constructor(service: GamesService) {
    service.games.subscribe(games => { this.games = games; });
  }
}
