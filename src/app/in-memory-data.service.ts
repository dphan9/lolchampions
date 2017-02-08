import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        // const jsonfile = require('jsonfile');
        // const file = './app/champions.json';
        // console.log(jsonfile.readFileSync(file));

        // var obj = require('./champions.json');
        // console.log(obj);
        // const fs = require('fs');
        // const json = JSON.parse(fs.readFileSync('champions.json', 'utf8'));
        // console.log(json);

        let champions = [
            {
                "id": 24,
                "key": "Jax",
                "name": "Jax",
                "title": "Grandmaster at Arms"
            },
            {
                "id": 37,
                "key": "Sona",
                "name": "Sona",
                "title": "Maven of the Strings"
            },
            {
                "id": 18,
                "key": "Tristana",
                "name": "Tristana",
                "title": "the Yordle Gunner"
            }
        ];
        return { champions };
    }
}