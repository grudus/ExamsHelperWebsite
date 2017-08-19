require('./exams.html');

class Exams {
    /*@ngInject */
    constructor(ExamsService) {
        this.ExamsService = ExamsService;
        this.ExamsService.getAllAsMap().$promise
            .then(res => this.convertToMap(res))
    }

    convertToMap(exams) {
        this.examsPerDay = exams;
    }

    addNewExam(exam) {
        console.log("add new exam");
        const toSave = exam;
        toSave.date.setMinutes(exam.time.minutes);
        toSave.date.setHours(exam.time.hours);
        toSave.subjectId = exam.subject.id;

        console.log(toSave)
    }
}

export default {
    controller: Exams,
    templateUrl: 'exams.html'
}