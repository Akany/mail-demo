import ng from 'angular';
import template from './app.html';
import headerComponent from './components/header/header.component';

export default ng.module('mail', ['ngMaterial'])
    .component('app', {
        template: template
    })
    .component('header', headerComponent);
