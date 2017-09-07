require("./exams.upcoming.html")

class UpcomingExams {
    /*@ngInject*/
    constructor(ExamsService) {
        this.ExamsService = ExamsService;
        this.loading = true;
    }

    $onInit() {
        this.examsPerDay = this.examsPerDay.sort((a, b) => b.date.localeCompare(a.date));
        this.loading = false;
    }
}

export default {
    controller: UpcomingExams,
    templateUrl: "exams.upcoming.html",
    bindings: {
        examsPerDay: "<"
    }
}