export default class Login {
    constructor(gapiService) {
        this.gapi = gapiService.gapi;
    }

    subscribe(callback) {
        this.gapi.auth2.getAuthInstance()
            .isSignedIn.listen(callback);
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
}