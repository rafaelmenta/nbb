import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export interface GameInfo {
  id: string;
  live: boolean;
  home: {
    team: string;
    score: string;
  };
  away: {
    team: string;
    score: string;
  };
  meta: {
    gameTime: string;
    status: string;
    quarter: string;
    time: string;
  };
}

export interface GameInfoRaw {
  id: string;
  equipe1: string;
  equipe2: string;
  pontos1: string;
  pontos2: string;
  quarto: string;
  tempo: string;
  status: GameStatus;
  modo: string;
  aovivo: string;
  plataforma: string;
  video: string;
  start_time: string;
}

export enum GameStatus {
  LIVE = '1',
  FINAL = '2',
}

@Injectable()
export class GamesService {

  private isFetchingGames = false;
  private gamesSubject: BehaviorSubject<GameInfo[]> = new BehaviorSubject([]);
  public readonly games: Observable<GameInfo[]> = this.gamesSubject.asObservable();

  transformGameInfo(raw?: GameInfoRaw): GameInfo {
    if (!raw) {
      return <GameInfo>{};
    }

    return {
      id: raw.id,
      live: raw.status === GameStatus.LIVE,
      home: {
        team: raw.equipe1,
        score: raw.pontos1,
      },
      away: {
        team: raw.equipe2,
        score: raw.pontos2
      },
      meta: {
        gameTime: raw.start_time,
        quarter: raw.quarto,
        status: raw.status,
        time: raw.tempo,
      }
    };
  }

  private fetchGames() {
    const now = new Date();
    const URL = `http://api.draftbrasil.org/nba/boxscore-nbb/${now.getTime()}`;

    this.http.get(URL).subscribe((data: { partidas?: GameInfoRaw[] }) => {
      let games = [];
      if (data && data.partidas) {
        games = data.partidas.map(this.transformGameInfo);
      }
      this.gamesSubject.next(games);

      if (this.hasLiveGame(games)) {
        if (!this.isFetchingGames) {
          this.realtime();
          this.isFetchingGames = true;
        }
      } else {
        this.isFetchingGames = false;
      }
    });
  }

  private realtime() {
    setInterval(() => {
      this.fetchGames();
    }, 5000);
  }

  private hasLiveGame(games: GameInfo[]): boolean {
    return games.reduce((hasGames, game) => hasGames || game.live, false);
  }

  constructor(protected http: HttpClient) {
    this.fetchGames();
  }

}
