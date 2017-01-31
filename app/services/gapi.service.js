const CLIENT_ID = '281583626312-s03923s1nvsdefgndhkdk703e63gf86p.apps.googleusercontent.com';
const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'];

export default class gapi {
    init () {
        return this.inject()
            .then(() => this.load())
            .then(() => {
                return this.gapi.client.init({
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES
                });
            });
    }

    load () {
        return new Promise(resolve => {
            this.gapi.load('client:auth2', resolve)
        });
    }

    inject () {
        const self = this;
        const gapi = document.createElement('script');

        gapi.type = 'text/javascript';
        gapi.async = true;
        gapi.src = 'https://apis.google.com/js/api.js';

        return new Promise((resolve, reject) => {
            gapi.addEventListener('load', onGapiLoaded);
            document.body.append(gapi);

            function onGapiLoaded() {
                self.gapi = window.gapi;
                gapi.removeEventListener('load', onGapiLoaded);
                resolve(window.gapi);
            }
        });
    }
}