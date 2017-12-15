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
  FINAL = '2',
}

@Injectable()
export class GamesService {

  private gamesSubject: BehaviorSubject<GameInfo[]> = new BehaviorSubject([]);

  public readonly games: Observable<GameInfo[]> = this.gamesSubject.asObservable();

  transformGameInfo(raw?: GameInfoRaw): GameInfo {
    if (!raw) {
      return <GameInfo>{};
    }

    return {
      id: raw.id,
      live: raw.aovivo === '0' ? false : true,
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

  constructor(protected http: HttpClient) {

    const now = new Date();
    const URL = `http://api.draftbrasil.org/nba/boxscore-nbb/${now.getTime()}`;

    http.get(URL).subscribe((data: { partidas?: GameInfoRaw[] }) => {
      this.gamesSubject.next(data && data.partidas ? data.partidas.map(this.transformGameInfo) : []);
    });
  }

}
