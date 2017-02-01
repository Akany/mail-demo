import template from './sign-in.template.html';

class SignIn {
    constructor (loginService) {
        this.loginService = loginService;
    }

    $onInit() {
        this.loginService
            .subscribe(logged => this.onLoginChange(logged));

        this.onLoginChange(this.loginService.isLogged());
    }

    login() {
        this.loginService
            .login();
    }

    logout() {
        this.loginService
            .logout();
    }

    onLoginChange(logged) {
        this.logged = logged;
    }
}

export default {
    template: template,
    controller: SignIn
};