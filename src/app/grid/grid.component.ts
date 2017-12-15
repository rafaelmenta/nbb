import {Component, Input} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { GameInfo } from '../games.service';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'app-grid',
  styleUrls: ['grid.component.css'],
  templateUrl: 'grid.component.html',
})
export class GridComponent {

  @Input() games: GameInfo[];

  // games = [
  //   {
  //     home : { team: 'flamengo', symbol: 'FLA', score: '86' },
  //     away : { team: 'joinville', symbol: 'JOI', score: '75' },
  //   },
  //   {
  //     home : { team: 'pinheiros', symbol: 'PIN', score: '82' },
  //     away : { team: 'franca', symbol: 'FRA', score: '80' },
  //   },
  // ];
  tiles = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'etc', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'etc', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'etc', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'etc', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'etc', cols: 1, rows: 1, color: 'lightblue'},
    {text: '...', cols: 1, rows: 1, color: 'lightblue'},
  ];
}
