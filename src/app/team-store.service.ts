import { Injectable } from '@angular/core';

export interface TeamInfo {
  id?: number;
  name: string;
  symbol: string;
}

@Injectable()
export class TeamStoreService {

  private readonly teamInfoMap: {[key: string]: TeamInfo} = {
    PINHEIROS: {
      id: 18,
      name: 'pinheiros',
      symbol: 'PIN',
    },
    PAULISTANO: {
      id: 17,
      name: 'paulistano',
      symbol: 'CAP',
    },
    LIGA_SOROCABANA: {
      id: 23,
      name: 'lsb',
      symbol: 'LSB',
    },
    JOINVILLE: {
      id: 268,
      name: 'joinville',
      symbol: 'JLE',
    },
    VITORIA: {
      name: 'vitoria',
      symbol: 'VIT',
    },
    VASCO: {
      id: 222,
      name: 'vasco-da-gama',
      symbol: 'VAS',
    },
    CAXIAS: {
      id: 210,
      name: 'caxias-do-sul',
      symbol: 'CAX',
    },
    MOGI: {
      id: 54,
      name: 'mogi-das-cruzes',
      symbol: 'MOG',
    },
    CEARA: {
      id: 53,
      name: 'basquete-cearense',
      symbol: 'CEA',
    },
    FLAMENGO: {
      id: 2,
      name: 'flamengo',
      symbol: 'FLA',
    },
    CAMPO_MOURAO: {
      id: 130,
      name: 'campo-mourao',
      symbol: 'CMO',
    },
    FRANCA: {
      id: 14,
      name: 'franca',
      symbol: 'FRA',
    },
    BAURU: {
      id: 13,
      name: 'bauru',
      symbol: 'BAU',
    },
  };

  public readonly teams = {
    18: this.teamInfoMap.PINHEIROS,
    PIN: this.teamInfoMap.PINHEIROS,
    pinheiros: this.teamInfoMap.PINHEIROS,
    17: this.teamInfoMap.PAULISTANO,
    CAP: this.teamInfoMap.PAULISTANO,
    paulistano: this.teamInfoMap.PAULISTANO,
    23: this.teamInfoMap.LIGA_SOROCABANA,
    LSB: this.teamInfoMap.LIGA_SOROCABANA,
    lsb: this.teamInfoMap.LIGA_SOROCABANA,
    268: this.teamInfoMap.JOINVILLE,
    JLE: this.teamInfoMap.JOINVILLE,
    joinville: this.teamInfoMap.JOINVILLE,
    222: this.teamInfoMap.VASCO,
    VAS: this.teamInfoMap.VASCO,
    vasco: this.teamInfoMap.VASCO,
    VIT: this.teamInfoMap.VITORIA,
    vitoria: this.teamInfoMap.VITORIA,
    210: this.teamInfoMap.CAXIAS,
    CAX: this.teamInfoMap.CAXIAS,
    caxias: this.teamInfoMap.CAXIAS,
    54: this.teamInfoMap.MOGI,
    MOG: this.teamInfoMap.MOGI,
    mogi: this.teamInfoMap.MOGI,
    53: this.teamInfoMap.CEARA,
    CEA: this.teamInfoMap.CEARA,
    'basquete-cearense': this.teamInfoMap.CEARA,
    2: this.teamInfoMap.FLAMENGO,
    FLA: this.teamInfoMap.FLAMENGO,
    flamengo: this.teamInfoMap.FLAMENGO,
    130: this.teamInfoMap.CAMPO_MOURAO,
    CMO: this.teamInfoMap.CAMPO_MOURAO,
    'campo-mourao': this.teamInfoMap.CAMPO_MOURAO,
    14: this.teamInfoMap.FRANCA,
    FRA: this.teamInfoMap.FRANCA,
    franca: this.teamInfoMap.FRANCA,
    13: this.teamInfoMap.BAURU,
    BAU: this.teamInfoMap.BAURU,
    bauru: this.teamInfoMap.BAURU,
  };

  constructor() { }

}
