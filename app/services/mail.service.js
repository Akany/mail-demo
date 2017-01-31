export default class MailService {
    constructor(gapiService) {
        this.gapi = gapiService.gapi;
    }

    getMails(count) {
        return this.gapi.client
            .gmail.users.messages
            .list({
                userId: 'me',
                maxResults: count
            })
            .then(response => {
                return response.result.messages;
            });
    }

    getMail(id) {
        return this.gapi.client
            .gmail.users.messages
            .get({
                id,
                userId: 'me'
            })
            .then(response => response.result)
            .then(mail => {
                return {
                    from: getHeader(mail.payload.headers, 'From'),
                    subject: getHeader(mail.payload.headers, 'Subject'),
                    date: getHeader(mail.payload.headers, 'Date')
                };
            });
    }
}

function getHeader(headers, name) {
    return headers.find(header => header.name === name).value;
}