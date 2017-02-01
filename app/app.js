import ng from 'angular';
import template from './app.html';
import './app.css';
import headerComponent from './components/header/header.component';

import listComponent from './components/mail-list/mail-list.component';
import mailListService from './components/mail-list/mail-list.service';

import signInComponent from './components/sign-in/sign-in.component';

import gapiService from './services/gapi.service';
import loginService from './services/login.service';
import mailService from './services/mail.service';

export default ng.module('mail', ['ngMaterial', 'ngRoute'])
    .component('app', {
        template: template
    })
    .component('header', headerComponent)

    .component('mailList', listComponent)
    .service('mailListService', mailListService)

    .component('signIn', signInComponent)

    .service('gapiService', gapiService)
    .service('loginService', loginService)
    .service('mailService', mailService)

    .config($routeProvider => {
        $routeProvider
            .when('/', {
                template:'<app></app>',
                resolve: {
                    init: gapiService => {
                        return gapiService.init();
                    }
                }
            });
    });
