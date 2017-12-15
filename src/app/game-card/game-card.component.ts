import { Component, OnInit, Input } from '@angular/core';
import { GameInfo, GameStatus } from '../games.service';
import { TeamStoreService } from '../team-store.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input() game: GameInfo;

  public GameStatus = GameStatus;

  constructor(private teamStore: TeamStoreService) { }

  ngOnInit() {
  }

}
