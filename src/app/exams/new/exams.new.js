require('./exams.new.html');

class NewExam {

    /*@ngInject*/
    constructor() {
        console.log('New Exam constructor')
    }

    onOk() {
            this.onSubmit({exam: this.subject});
            this.onCancel();
            this.exam = {};
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