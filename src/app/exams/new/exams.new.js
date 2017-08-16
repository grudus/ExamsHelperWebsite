require('./exams.new.html');

class NewExam {

    /*@ngInject*/
    constructor(SubjectsService) {
        SubjectsService.query().$promise.then(res => {
            this.subjects = res;
            this.exam = {subject: this.subjects[0]};
        });

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