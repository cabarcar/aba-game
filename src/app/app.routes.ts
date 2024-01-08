import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Home
import { HomeComponent } from './components/home/home.component';

//Components
import { PlayerComponent } from './components/player/player.component';
import { BoardComponent } from './components/board/board.component';

export const routes: Routes = [
    {path: 'game/board', component: BoardComponent, title: 'Board'},
    {path: 'game/player', component: PlayerComponent, title: 'Player'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: '', component: HomeComponent, title: 'Home'},
    {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(routes),
      CommonModule
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }