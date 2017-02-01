export default class MailListService {
    constructor($q, mailService) {
        this.$q = $q;
        this.mailService = mailService;
    }

    load() {
        return this.mailService.getMails(20)
            .then(mails => {
                const mailsPromise = mails.map(mail => {
                    return this.mailService.getMail(mail.id);
                });
                
                return this.$q.all(mailsPromise);
            });
    }
}