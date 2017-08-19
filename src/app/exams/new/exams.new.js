require('./exams.new.html');

class NewExam {

    /*@ngInject*/
    constructor(SubjectsService) {
        SubjectsService.query().$promise.then(res => {
            this.subjects = res;
            this.restartExam();
        });

    }

    onOk() {
        this.onSubmit({exam: this.exam});
        this.onCancel();
        this.restartExam();
    }

    restartExam() {
        const date = new Date();
        this.exam = {
            subject: this.subjects[0], date: new Date(),
            time: {hours: date.getHours(), minutes: date.getMinutes()}
        };
    }

    setTime(time) {
        this.exam.time = time;
    }

    setDate(date) {
        this.exam.date = date;
    }
}

export default {
    controller: NewExam,
    templateUrl: 'exams.new.html',
    bindings: {
        onCancel: '&',
        onSubmit: '&'
    }
}