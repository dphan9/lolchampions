import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { ChampionService } from './champion.service';
import Champion from '../models/champion';

@Component({
    moduleId: module.id,
    selector: 'champion-list',
    templateUrl: 'champion-list.component.html',
    styleUrls: ['champion-list.component.css']
})
export class ChampionListComponent implements OnInit {
    champions: Champion[];
    selectedChampion: Champion;

    constructor(
        private router: Router,
        private championService: ChampionService
    ) { }

    ngOnInit(): void {
        this.championService.getChampions().then(champions => this.champions = champions);
    }

    onSelect(champion: Champion): void {
        this.router.navigate(['/champion', champion.key]);
    }
}