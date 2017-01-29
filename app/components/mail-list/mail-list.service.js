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

export default class {
    constructor ($q) {
        this.$q = $q;
    }

    load () {
        /*
            Request google mails
        */
        return this.$q.when(mock);
    }
}