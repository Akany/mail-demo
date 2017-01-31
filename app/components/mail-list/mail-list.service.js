const mock = [{
    title: 'Mail 1',
    text: 'Content of mail 1'
}, {
    title: 'Mail 2',
    text: 'Content of mail 2'
}, {
    title: 'Mail 3',
    text: 'Content of mail 3'
}];

export default class MailListService {
    constructor($q, mailService) {
        this.$q = $q;
        this.mailService = mailService;
    }

    load() {
        return this.mailService.getMails(10)
            .then(mails => {
                const mailsPromise = mails.map(mail => {
                    return this.mailService.getMail(mail.id);
                });
                
                return this.$q.all(mailsPromise);
            });
    }
}