import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';

import { MatTableDataSource, MatSort } from '@angular/material';
import { StatsInfoPlayer, StatsInfoTeam, StatsInfo } from '../stats/stats.definitions';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-boxscore',
  templateUrl: './boxscore.component.html',
  styleUrls: ['./boxscore.component.css']
})

export class BoxscoreComponent implements OnInit {

  displayedColumns = [
    'name',
    'minutes',
    'fieldgoal',
    'fieldgoal3',
    'ft',
    'ofr',
    'treb',
    'ast',
    'stl',
    'blk',
    'tur',
    'pf',
    'plm',
    'eff',
    'pts',
  ];
  dataSource = new MatTableDataSource<StatsInfoPlayer>();

  @Input() set team(value: StatsInfoTeam) {
    this._team = value;
    this.dataSource = new MatTableDataSource<StatsInfoPlayer>(this.team.players);
  }

  get team() {
    return this._team;
  }

  _team: StatsInfoTeam;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
