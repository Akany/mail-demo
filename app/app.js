import ng from 'angular';
import template from './app.html';

export default ng.module('mail', ['ngMaterial'])
    .component('app', {
        template: template
    });
