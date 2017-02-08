import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionsRoutingModule } from './champions-routing.module';
import { ChampionService } from './champion.service';
import { ChampionListComponent } from './champion-list.component';
import { ChampionComponent } from './champion.component';
import { ChampionSpellComponent } from './champion-spell.component';

@NgModule({
    imports: [CommonModule, ChampionsRoutingModule],
    declarations: [ChampionListComponent, ChampionComponent, ChampionSpellComponent],
    providers: [ChampionService]
})
export class ChampionsModule { }