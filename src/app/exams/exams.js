require('./exams.html');

class Exams {
    /*@ngInject */
    constructor(ExamsService, moment) {
        this.ExamsService = ExamsService;

        this.ExamsService.getAllAsMap().$promise
            .then(res => this.convertToMap(res));
        this.moment = moment;
    }

    convertToMap(exams) {
        this.examsPerDay = exams;
    }

    addNewExam(exam) {
        console.log("add new exam");
        const toSave = exam;
        toSave.date.setMinutes(exam.time.minutes);
        toSave.date.setHours(exam.time.hours);
        toSave.date = this.moment(toSave.date).format("YYYY-MM-DD HH:mm:ss");
        toSave.subjectId = exam.subject.id;

        console.log(toSave);
        this.ExamsService.save({}, toSave, response => console.log(response))
    }
}

export default {
    controller: Exams,
    templateUrl: 'exams.html'
}