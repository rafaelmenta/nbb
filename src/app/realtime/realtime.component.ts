import { Component, OnInit, Input } from '@angular/core';

export interface GameStep {
  msg: string;
}

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.css']
})

export class RealtimeComponent implements OnInit {

  @Input() gameSteps: GameStep[];

  constructor() { }

  ngOnInit() {
  }

}
