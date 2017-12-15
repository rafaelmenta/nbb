import { TeamInfo } from '../team-store.service';
import { PlayerInfo } from '../player-store/player-store.service';

export interface StatTeamRaw {
    id: string;
    nome: string;
    sigla: string;
    tecnico: string;
    pontos: string[];
    faltas: string[];
    p2: string[];
    p3: string[];
    ll: string[];
    en: string[];
    reb: string[];
    ass: string[];
    br: string[];
    to: string[];
    fr: string[];
    er: string[];
    ef: string[];
    pm: string[];
    teamReb: string[];
    teamFa: string[];
    teamBr: string[];
    destaques: {
        cestinha: Array<{ jogador: string, pontos: string }>,
        rebotes: Array<{ jogador: string, rebotes: string }>,
        assistencias: Array<{ jogador: string, assistencias: string }>,
    };
}

export interface StatScoreRaw {
    pontos1: string;
    pontos2: string;
    faltas1: string;
    faltas2: string;
    tempo?: string;
    quarto?: string;
}

export interface StatPlayRaw {
    id: string;
    id_jogador: string;
    equipe: string;
    tipo: string;
    tempo: string;
    quarto: string;
    placar: string;
    msg: string;
    title: string;
    desc: string;
    statsMsg: string;
}

export interface StatPlayerRaw {
    id: string;
    nome: string;
    numero: string;
    equipe: string;
    posicao: string;
    avatar: string;
    titular: boolean;
    em_quadra: boolean;
    tempo: string[];
    status: string;
    pontos: string[];
    faltas: string[];
    p2: string[];
    p3: string[];
    ll: string[];
    en: string[];
    reb: string[];
    ass: string[];
    br: string[];
    to: string[];
    fr: string[];
    er: string[];
    pm: string[];
    ef: string[];
}

export interface StatHighlightsRaw {
    cestinha: {
        jogador1: string;
        pontos1: string;
        jogador2: string;
        pontos2: string;
        destaque:  string;
    };
    assistencias: {
        jogador1: string;
        assistencias1: string;
        jogador2: string;
        assistencias2: string;
        destaque: string;
    };
    rebotes: {
        jogador1: string;
        rebotes1: string;
        jogador2: string;
        rebotes2: string;
        destaque: string;
    };
}

export interface StatsRaw {
    partida: {
        id: string;
        local: string;
        data: string;
        quarto: string;
        tempo: string;
        status: string;
        modo: string;
        aovivo: string;
        plataforma: string;
        video: string;
        campeonato: string;
    };
    equipe1: StatTeamRaw;
    equipe2: StatTeamRaw;
    placar: {
        geral: StatScoreRaw;
        quartos: StatScoreRaw[];
    };
    destaques: StatHighlightsRaw;
    jogadas: StatPlayRaw[];
    jogadores: StatPlayerRaw[];
}

export interface StatsInfoPlayer {
    id: string;
    teamId: TeamInfo;
    avatar: string;
    number: number;
    name: string;
    minutes: string;
    pts: number;
    ptsa: number;
    fgm3: number;
    fga3: number;
    fgm2: number;
    fga2: number;
    ftm: number;
    fta: number;
    ofr: number;
    dfr: number;
    treb: number;
    ast: number;
    stl: number;
    blk: number;
    pf: number;
    pfa: number;
    tur: number;
    dnk: number;
    plm: number;
    eff: number;
}

export interface StatsInfoPlay {
    id: string;
    player: string;
    team: TeamInfo;
    type: string;
    time: string;
    quarter: string;
    score: string;
    msg: string;
    title: string;
    desc: string;
    statsMsg: string;
}

export interface StatsInfoTeam {
    name: string;
    slug: string;
    score: number;
    players: StatsInfoPlayer[];
}

export interface StatsInfo {
    home: StatsInfoTeam;
    away: StatsInfoTeam;
}

export interface StatsHighlightItem {
    points: {
        player: PlayerInfo;
        score: number;
    };
    rebounds: {
        player: PlayerInfo;
        score: number;
    };
    assists: {
        player: PlayerInfo;
        score: number;
    };
}

export interface StatsInfoHighlight {
    home: StatsHighlightItem;
    away: StatsHighlightItem;
}

export interface StatStructured {
    converted: number;
    attempted: number;
}

export interface StatReboundStructured {
    offensive: number;
    defensive: number;
}
