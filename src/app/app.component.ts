import { Component, Injectable } from '@angular/core';
import { GamesService, GameInfo } from './games.service';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  games: GameInfo[];

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics, service: GamesService) {
    service.games.subscribe(games => { this.games = games; });
  }
}
