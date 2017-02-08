import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChampionListComponent } from './champion-list.component';
import { ChampionComponent } from './champion.component';

const championsRoutes: Routes = [
    { path: 'champions', component: ChampionListComponent },
    { path: 'champion/:key', component: ChampionComponent }
];

@NgModule({
    imports: [RouterModule.forChild(championsRoutes)],
    exports: [RouterModule]
})
export class ChampionsRoutingModule { }