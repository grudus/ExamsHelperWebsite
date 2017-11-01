require("./exams.past.html");

class PastExams {
    /*@ngInject*/
    constructor(ExamsSubjectService, moment) {
        this.ExamsSubjectService = ExamsSubjectService;
        this.loading = true;
        this.moment = moment;
    }
}

export default {
    controller: PastExams,
    templateUrl: "exams.past.html",
    bindings: {
        examsWithoutGrade: '<'
    }
}