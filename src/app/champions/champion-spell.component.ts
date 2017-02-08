import { Component, Input, OnInit } from '@angular/core';

import { AppConfig } from '../app.config';

import ChampionSpell from '../models/championSpell';

@Component({
    moduleId: module.id,
    selector: 'champion-spell',
    templateUrl: 'champion-spell.component.html',
    styleUrls: ['champion-spell.component.css']
})
export class ChampionSpellComponent implements OnInit {
    @Input() spell: ChampionSpell;
    spellImgUrl: string;

    constructor(
        private appConfig: AppConfig
    ) { }

    ngOnInit(): void {
        const imgBaseUrl = this.appConfig.getDdragonBaseUrl()
            .replace('{version}', this.appConfig.getDataVersion()) + '/img/spell/';

        this.spellImgUrl = imgBaseUrl + this.spell.image.full;
    }
}