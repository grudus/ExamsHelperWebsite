require("./exams.upcoming.html")

class UpcomingExams {
    /*@ngInject*/
    constructor(ExamsService, $state) {
        this.ExamsService = ExamsService;
        this.loading = true;
        this.$state = $state;
    }

    $onInit() {
        this.examsPerDay = this.examsPerDay
            .sort((a, b) => a.date.localeCompare(b.date));
        this.loading = false;
    }

    showDeleteModal(id) {
        this.idToDelete = id;
        this.showModal = true;
    }

    async deleteExam() {
        await this.ExamsService.deleteExam({}, {id: this.idToDelete}).$promise;
        this.$state.reload();
    }
}

export default {
    controller: UpcomingExams,
    templateUrl: "exams.upcoming.html",
    bindings: {
        examsPerDay: "<"
    }
}