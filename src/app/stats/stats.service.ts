import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { TeamStoreService } from '../team-store.service';
import { StatStructured, StatReboundStructured, StatPlayerRaw,
  StatsInfoPlayer, StatsRaw, StatsInfo, StatPlayRaw, StatsInfoPlay, StatHighlightsRaw, StatsInfoHighlight } from './stats.definitions';
import { PlayerStoreService } from '../player-store/player-store.service';

@Injectable()
export class StatsService {

  private statsSubject: BehaviorSubject<any> = new BehaviorSubject({});
  public readonly stats: Observable<any> = this.statsSubject.asObservable();

  private transformRawStat(input: string): StatStructured {
    // Unstructured stat has the format <converted>/<attempted> (<percentage)
    const converted = input.split('/')[0];
    const attempted = input.split('(')[0].split('/')[1];

    return {
      converted: Number(converted),
      attempted: Number(attempted),
    };
  }

  private transformRawRebound(input: string): StatReboundStructured {
    const rebounds = input.split('+');
    return {
      offensive: Number(rebounds[0]),
      defensive: Number(rebounds[1]),
    };
  }

  transformPlayerStats(input: StatPlayerRaw): StatsInfoPlayer {
    return {
      id: input.id,
      teamId: this.teamStore.teams[input.equipe],
      avatar: input.avatar,
      number: Number(input.numero),
      name: input.nome,
      minutes: input.tempo[0],
      pts: this.transformRawStat(input.pontos[0]).converted,
      ptsa: this.transformRawStat(input.pontos[0]).attempted,
      fgm3: this.transformRawStat(input.p3[0]).converted,
      fga3: this.transformRawStat(input.p3[0]).attempted,
      fgm2: this.transformRawStat(input.p2[0]).converted,
      fga2: this.transformRawStat(input.p2[0]).attempted,
      ftm: this.transformRawStat(input.ll[0]).converted,
      fta: this.transformRawStat(input.ll[0]).attempted,
      ofr: this.transformRawRebound(input.reb[0]).offensive,
      dfr: this.transformRawRebound(input.reb[0]).defensive,
      treb:
        this.transformRawRebound(input.reb[0]).offensive +
        this.transformRawRebound(input.reb[0]).defensive,
      ast: Number(input.ass[0]),
      stl: Number(input.br[0]),
      blk: Number(input.to[0]),
      pf: Number(input.faltas[0]),
      pfa: Number(input.fr[0]),
      tur: Number(input.er[0]),
      dnk: Number(input.en[0]),
      plm: Number(input.pm[0]),
      eff: Number(input.ef[0]),
    };
  }

  extractTeamPlayers(input: StatsInfoPlayer[], teamId: string): StatsInfoPlayer[] {
    return input
      .filter(player => player.teamId.id === Number(teamId));
  }

  transformStats(rawStats: StatsRaw): StatsInfo {
    const players: StatsInfoPlayer[] = rawStats.jogadores.map(this.transformPlayerStats.bind(this));

    players.forEach(player => this.playerStore.add(player));

    return {
      home: {
        name: rawStats.equipe1.nome,
        slug: this.teamStore.teams[rawStats.equipe1.sigla].name,
        score: Number(rawStats.placar.geral.pontos1),
        players: this.extractTeamPlayers(players, rawStats.equipe1.id),
      },
      away: {
        name: rawStats.equipe2.nome,
        slug: this.teamStore.teams[rawStats.equipe2.sigla].name,
        score: Number(rawStats.placar.geral.pontos2),
        players: this.extractTeamPlayers(players, rawStats.equipe2.id),
      }
    };
  }

  transformPlays(rawPlays: StatPlayRaw[]): StatsInfoPlay[] {
    return rawPlays.map(rawPlay => {
      return  {
        id: rawPlay.id,
        player: rawPlay.id_jogador,
        team: this.teamStore.teams[rawPlay.equipe],
        type: rawPlay.tipo,
        time: rawPlay.tempo,
        quarter: rawPlay.quarto,
        score: rawPlay.placar,
        msg: rawPlay.msg,
        title: rawPlay.title,
        desc: rawPlay.desc,
        statsMsg: rawPlay.statsMsg,
      };
    });
  }

  transformHighlights(input: StatHighlightsRaw): StatsInfoHighlight {
    return {
      home: {
        points: {
          player: this.playerStore.fetch(input.cestinha.jogador1),
          score: Number(input.cestinha.pontos1),
        },
        rebounds: {
          player: this.playerStore.fetch(input.rebotes.jogador1),
          score: Number(input.rebotes.rebotes1),
        },
        assists: {
          player: this.playerStore.fetch(input.assistencias.jogador1),
          score: Number(input.assistencias.assistencias1),
        }
      },
      away: {
        points: {
          player: this.playerStore.fetch(input.cestinha.jogador2),
          score: Number(input.cestinha.pontos2),
        },
        rebounds: {
          player: this.playerStore.fetch(input.rebotes.jogador2),
          score: Number(input.rebotes.rebotes2),
        },
        assists: {
          player: this.playerStore.fetch(input.assistencias.jogador2),
          score: Number(input.assistencias.assistencias2),
        }
      },
    };
  }

  realtime() {
    let gameId = 22304;
    setInterval(() => {
      gameId = gameId === 22304 ? 22303 : 22304;
      this.fetchStats(gameId);
    }, 5000);
  }

  fetchStats(gameId: number) {
    const now = new Date();
    const URL = `http://api.draftbrasil.org/nba/boxscore-nbb/game/${gameId}/${now.getTime()}`;

    this.http.get(URL).subscribe((data: StatsRaw) => {
      this.statsSubject.next({
        boxscore: this.transformStats(data),
        gameSteps: this.transformPlays(data.jogadas),
        highlights: this.transformHighlights(data.destaques),
      });
    });
  }

  constructor(protected http: HttpClient, protected teamStore: TeamStoreService, protected playerStore: PlayerStoreService) { }

}
