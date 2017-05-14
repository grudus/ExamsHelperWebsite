require('./subjects.new.html');

class NewSubject {
    constructor() {

    }

}

export default {
    controller: NewSubject,
    templateUrl: 'subjects.new.html',
    bindings: {
        hide: '&',
    }
}