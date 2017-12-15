import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { StatPlayerRaw, StatsInfoPlay, StatsInfoPlayer } from '../stats/stats.definitions';
import { TeamStoreService, TeamInfo } from '../team-store.service';

export interface PlayerInfo {
  id: string;
  name: string;
  avatar: string;
}

@Injectable()
export class PlayerStoreService {

  private playerStore: { [key: string]: PlayerInfo };

  add(input: StatsInfoPlayer) {
    const player = this.fetch(input.id);

    if (player) {
      return;
    }

    this.playerStore[input.id] = {
      id: input.id,
      name: input.name,
      avatar: input.avatar,
    };
  }

  fetch(id: string): PlayerInfo {
    return this.playerStore[id];
  }

  constructor(protected teamStore: TeamStoreService) {
    this.playerStore = {};
  }

}
