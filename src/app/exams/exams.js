require('./exams.html');

class Exams {
    /*@ngInject */
    constructor(ExamsService, moment) {
        this.ExamsService = ExamsService;
        this.moment = moment;
    }

    async $onInit() {
        this.examsPerDay = await this.ExamsService.getAllAsMap();
    }


    addNewExam(exam) {
        const toSave = exam;
        toSave.date.setMinutes(exam.time.minutes);
        toSave.date.setHours(exam.time.hours);
        toSave.date = this.moment(toSave.date).format("YYYY-MM-DD HH:mm:ss");
        toSave.subjectId = exam.subject.id;

        this.ExamsService.save({}, toSave, response => console.log(response))
    }
}

export default {
    controller: Exams,
    templateUrl: 'exams.html'
}