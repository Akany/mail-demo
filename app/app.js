import ng from 'angular';
import template from './app.html';
import headerComponent from './components/header/header.component';

import listComponent from './components/mail-list/mail-list.component';
import mailService from './components/mail-list/mail-list.service';

export default ng.module('mail', ['ngMaterial'])
    .component('app', {
        template: template
    })
    .component('header', headerComponent)

    .component('mailList', listComponent)
    .service('mailListService', mailService);
