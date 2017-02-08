import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/share';

import { AppConfig } from '../app.config';
import { ChampionService } from './champion.service';
import Champion from '../models/champion';
import ChampionSpell from '../models/championSpell';

@Component({
    moduleId: module.id,
    selector: 'champion',
    templateUrl: 'champion.component.html',
    styleUrls: ['champion.component.css']
})
export class ChampionComponent implements OnInit {
    championImgUrl: string;
    champion: Champion;

    constructor(
        private championService: ChampionService,
        private route: ActivatedRoute,
        private location: Location,
        private appConfig: AppConfig
    ) { }

    ngOnInit(): void {
        const imgBaseUrl = this.appConfig.getDdragonBaseUrl()
            .replace('{version}', this.appConfig.getDataVersion()) + '/img/champion/';

        this.route.params
            .switchMap((params: Params) => this.championService.getChampionByKey(params['key']))
            .subscribe(champion => {
                this.champion = champion;
                this.championImgUrl = imgBaseUrl + `${champion.image.full}`;
                // this.championService.getChampionSpellsById(champion.id).then(spells => this.spells = spells);
            });
    }
}