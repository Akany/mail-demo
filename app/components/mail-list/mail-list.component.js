import template from './mail-list.template.html';
import './mail-list.css';

class MailList {
    constructor (mailListService, loginService, $scope) {
        this.mailListService = mailListService;
        this.login = loginService;
        this.$scope = $scope;
    }

    $onInit () {
        this.login.subscribe(logged => {
            if (logged) {
                this.onLogin();
            }
        });

        if (this.login.isLogged()) {
            this.loadMails();

            return;
        }
    }

    onLogin() {
        this.loadMails();
    }

    loadMails() {
        return this.mailListService
            .load()
            .then(mails => {
                // group by date

                return mails;
            })
            .then(mails => {
                this.$scope.$apply(() => {
                    this.mails = mails;
                });
            });
    }
}

export default {
    template: template,
    controller: MailList
};