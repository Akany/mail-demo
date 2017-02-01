export default class Login {
    constructor(gapiService, $rootScope) {
        this.gapi = gapiService.gapi;
        this.$rootScope = $rootScope;
    }

    subscribe(callback) {
        this.gapi.auth2.getAuthInstance()
            .isSignedIn.listen(logged => {
                this.$rootScope.$apply(() => {
                    callback(logged);
                });
            });
    }

    isLogged() {
        return this.gapi.auth2.getAuthInstance()
            .isSignedIn.get();
    }

    login() {
        return this.gapi.auth2
            .getAuthInstance()
            .signIn();
    }

    logout() {
        return this.gapi.auth2
            .getAuthInstance()
            .signOut();
    }
}