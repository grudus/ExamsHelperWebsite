require('./exams.html');

class Exams {
    /*@ngInject*/
    constructor() {
        console.log('Exam constructor');
    }
}

export default {
    controller: Exams,
    templateUrl: "exams.html"
}