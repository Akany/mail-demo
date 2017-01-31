import template from './sign-in.template.html';

class SignIn {
    constructor (loginService) {
        this.loginService = loginService;
        this.id = 'signInButton';
    }

    $onInit() {
        this.loginService
            .subscribe(logged => this.onLoginChange(login));
    }

    login() {
        this.loginService
            .login();
    }

    onLoginChange(logged) {
        // update button
    }
}

export default {
    template: template,
    controller: SignIn
};