require("./exams.without-grade.html");

class ExamsWithoutGrade {
    /*@ngInject*/
    constructor(ExamsService, $state) {
        this.ExamsService = ExamsService;
        this.$state = $state;
    }

    async selectGrade(grade, exam) {
        await this.ExamsService.updateGrade({grade: grade.value}, {id: exam.id}).$promise;
        this.$state.reload();
    }
}

export default {
    templateUrl: "exams.without-grade.html",
    controller: ExamsWithoutGrade,
    bindings: {
        exams: '<'
    }
}