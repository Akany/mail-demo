import ng from 'angular';
import AppModule from './app/app.js';

ng.element(document)
    .ready(() => {
        ng.bootstrap(document.body, [AppModule.name]);
    });