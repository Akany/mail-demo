import template from './mail-list.template.html';
import './mail-list.css';

class MailList {
    constructor (mailListService) {
        this.mailService = mailListService;
    }

    $onInit () {
        this.loadMails()
            .then(mails => {
                this.mails = mails;
            });
    }

    loadMails () {
        return this.mailService
            .load()
            .then(mails => {
                // group by date
                // check gapi response first

                return mails;
            });
    }
}

export default {
    template: template,
    controller: MailList
};