import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { PlayListComponent } from './play-list/play-list.component';

const routes: Routes = [
    { path: '', component:  HomeComponent },
    { path: 'create', component: CreateGameComponent },
    { path: ':key', component: GameComponent },
    { path: ':id/play_list', component: PlayListComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }