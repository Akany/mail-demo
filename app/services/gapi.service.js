const CLIENT_ID = '281583626312-s03923s1nvsdefgndhkdk703e63gf86p.apps.googleusercontent.com';

export default class {
    init () {
        return this.inject();
    }

    inject () {
        const self = this;
        const gapi = document.createElement('script');

        gapi.type = 'text/javascript';
        gapi.async = true;
        gapi.src = 'https://apis.google.com/js/client:plusone.js';

        return new Promise((resolve, reject) => {
            gapi.addEventListener('load', onGapiLoaded);
            document.body.append(gapi);

            function onGapiLoaded() {
                self.gapi = window.gapi;
                gapi.removeEventListener('load', onGapiLoaded);
                resolve();
            }
        });
    }

    render (id) {
        const self = this;

        return new Promise((resolve, reject) => {
            self.gapi.signin
                .render(id, {
                    callback: onResponse,
                    clientid: CLIENT_ID,
                    requestvisibleactions: 'http://schemas.google.com/AddActivity',
                    scope: 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email',
                    cookiepolicy: 'single_host_origin'
                });

            function onResponse(authResult) {
                /*
                    @TODO
                    switch to observable
                */
                if (authResult['access_token']) {
                    resolve(authResult);
                }
            }
        });
    }
}