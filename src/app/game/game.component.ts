import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatsService } from '../stats/stats.service';
import { StatsInfo, StatPlayRaw, StatsInfoHighlight, StatsInfoPlay } from '../stats/stats.definitions';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private gameId: number;
  public boxscore: StatsInfo;
  public gameSteps: StatsInfoPlay[];
  public highlights: StatsInfoHighlight;

  getBackground(team) {
    const url = (`url('http://lnb.com.br/wp-content/uploads/2016/10/logo-${team.slug}-1-150x150.png')`);
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0.4)), ${url}`);
  }

  constructor(private route: ActivatedRoute, private statsService: StatsService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameId = params.id;
      this.statsService.fetchStats(this.gameId);
    });

    this.statsService.stats.subscribe(newStats => {
      this.boxscore = newStats.boxscore;
      this.gameSteps = newStats.gameSteps;
      this.highlights = newStats.highlights;
    });
  }

}
