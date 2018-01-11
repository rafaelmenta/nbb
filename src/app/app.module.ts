import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule,
  MatToolbarModule, MatIconModule, MatSidenavModule, MatTableModule,
  MatSortModule, MatStepperModule, MatChipsModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavComponent } from './nav/nav.component';
import { GameCardComponent } from './game-card/game-card.component';
import { BoxscoreComponent } from './boxscore/boxscore.component';
import { CdkTableModule } from '@angular/cdk/table';
import { RealtimeComponent } from './realtime/realtime.component';
import { GamesService } from './games.service';
import { HttpClientModule } from '@angular/common/http';
import { TeamStoreService } from './team-store.service';
import { GameComponent } from './game/game.component';
import { RouteModule } from './route/route.module';
import { HomeComponent } from './home/home.component';
import { StatsService } from './stats/stats.service';
import { PlayerStoreService } from './player-store/player-store.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    NavComponent,
    GameCardComponent,
    BoxscoreComponent,
    RealtimeComponent,
    GameComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatTableModule,
    MatStepperModule,
    CdkTableModule,
    MatSortModule,
    MatIconModule,
    MatChipsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouteModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
  ],
  providers: [
    GamesService,
    StatsService,
    TeamStoreService,
    PlayerStoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
