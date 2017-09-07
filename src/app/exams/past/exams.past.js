require("./exams.past.html")

class PastExams {
    /*@ngInject*/
    constructor(ExamsService) {
        this.ExamsService = ExamsService;
        this.loading = true;
    }

}

export default {
    controller: PastExams,
    templateUrl: "exams.past.html"
}