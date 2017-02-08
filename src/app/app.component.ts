import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <a routerLink="/champions">Champions</a>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = 'LOL Champions';
}