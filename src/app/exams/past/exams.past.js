require("./exams.past.html")

class PastExams {
    /*@ngInject*/
    constructor(ExamsService, moment) {
        this.ExamsService = ExamsService;
        this.loading = true;
        this.moment = moment;
    }
}

export default {
    controller: PastExams,
    templateUrl: "exams.past.html",
    bindings: {
        examsPerDay: '<'
    }
}