require('./exams.html');

class Exams {
    /*@ngInject */
    constructor(ExamsService, moment, $state) {
        this.ExamsService = ExamsService;
        this.moment = moment;
        this.$state = $state;
        this.loading = true;
    }


    addNewExam(exam) {
        const toSave = exam;
        toSave.date.setMinutes(exam.time.minutes);
        toSave.date.setHours(exam.time.hours);
        toSave.date = this.moment(toSave.date).format("YYYY-MM-DD HH:mm:ss");
        toSave.subjectId = exam.subject.id;

        this.ExamsService.save({}, toSave, response => this.$state.reload())
    }
}

export default {
    controller: Exams,
    templateUrl: 'exams.html',
    bindings: {
        withoutGradeCount: '<'
    }
}