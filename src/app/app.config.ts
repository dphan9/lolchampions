import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppConfig {
    config: Object;

    constructor(private http: Http) { }

    load() {
        return new Promise((resolve) => {
            this.http.get('./app/config.json').map(res => res.json())
                .subscribe(config => {
                    this.config = config;
                    resolve(true);
                });
        });
    }

    getApiKey(): string {
        return this.get('apiKey');
    }

    getDataVersion(): string {
        return this.get('dataVersion');
    }

    getDefaultRegion(): string {
        return this.get('defaultRegion');
    }

    getChampionsFilePath(): string {
        return this.get('championsFilePath');
    }

    getChampionApiUrl(): string {
        return this.get('championApiUrl');
    }

    getDdragonBaseUrl(): string {
        return this.get('ddragonBaseUrl');
    }

    get(key: string): string {
        return this.config[key];
    }
}