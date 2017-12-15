import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameComponent } from '../game/game.component';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [{
  path: 'jogo/:id',
  component: GameComponent,
}, {
  path: '',
  component: HomeComponent,
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class RouteModule { }
