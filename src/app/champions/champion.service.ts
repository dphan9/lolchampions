import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AppConfig } from '../app.config';
import Champion from '../models/champion';

@Injectable()
export class ChampionService {
    championApiUrl: string;
    championsCache: Champion[] = null;

    constructor(
        private http: Http,
        private appConfig: AppConfig
    ) {
        const ddragonUrl = this.appConfig.getDdragonBaseUrl();
        const version = this.appConfig.getDataVersion();
        const locale = this.appConfig.get('locale');
        this.championApiUrl = ddragonUrl.replace('{version}', version) + `data/${locale}/champion/`;
    }

    getChampions(): Promise<Champion[]> {
        if (this.championsCache != null) {
            return Promise.resolve(this.championsCache);
        }

        const path = this.appConfig.getChampionsFilePath();

        return this.http.get(path)
            .toPromise()
            .then(response => {
                const champions = this.parseResponseData(response.json().data);
                return champions.sort((a, b) => {
                    if (a.name <= b.name) return -1;
                    else return 1;
                })
            })
            .then(champions => this.championsCache = champions)
            .catch(this.handleError);
    }

    getChampionByKey(key: string): Promise<Champion> {
        // return this.getChampions()
        //     .then(champions => champions.find(c => c.key === key))
        //     .then(champion => this.getChampionById(champion.id))
        //     .catch(this.handleError);

        // return this.readFileAsync(`./app/data/champions/${key}.json`)
        //     .then(champion => champion)
        //     .catch(this.handleError);

        const url = this.championApiUrl + `${key}.json`;
        return this.http.get(url)
            .toPromise()
            .then(res => res.json().data[key] as Champion)
            .catch(this.handleError);

        // return this.http.get(`./app/data/champions/${key}.json`)
        //     .toPromise()
        //     .then(res => res.json() as Champion)
        //     .catch(this.handleError);
    }

    // getChampionById(id: number): Promise<Champion> {
    //     console.log(this.championApiUrl);
    //     const url = this.championApiUrl
    //         .replace('{id}', id.toString())
    //         .replace('{data}', 'image');
    //     console.log(url);
    //     return this.http.get(url)
    //         .toPromise()
    //         .then(res => res.json() as Champion)
    //         .catch(this.handleError);
    // }

    // getChampionSpellsById(id: number): Promise<ChampionSpell[]> {
    //     console.log('getChampionSpellsById: ' + id);

    //     return this.http.get('./app/data/champions/aatrox_spells.json')
    //         .toPromise()
    //         .then(response => response.json().spells as ChampionSpell[])
    //         .catch(this.handleError);
    // }

    // private readFileAsync(filename: string): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         fs.readFile(filename, (err, res) => {
    //             if (err) reject(err);
    //             else resolve(res.toJSON());
    //         })
    //     });
    // }

    private parseResponseData(data: any): Champion[] {
        const champions: Champion[] = [];
        for (const key in data) {
            champions.push(data[key]);
        }
        return champions;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}