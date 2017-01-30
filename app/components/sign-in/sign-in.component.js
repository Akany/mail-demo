import template from './sign-in.template.html';

class SignIn {
    constructor (gapiService) {
        this.gapi = gapiService;
        this.id = 'signInButton';
    }

    $onInit () {
        this.gapi.init()
            .then(()=> this.gapi.render(this.id))
            .then(this.onLogin);
    }

    onLogin (auth) {
        console.log(auth);
    }
}

export default {
    template: template,
    controller: SignIn
};