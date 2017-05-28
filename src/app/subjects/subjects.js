require('./subjects.html')

class Subjects {
    /*@ngInject */
    constructor(SubjectsService, $state) {
        this.SubjectsService = SubjectsService;
        this.$state = $state;
        this.showModal = false;

        SubjectsService.query().$promise.then(res => {
            this.subjects = res;
        })
    }

    addNewSubject(subject) {
        this.SubjectsService.add({}, subject, () => {
            this.subjects.push(subject)
        });
    }


    details(subject) {
        this.$state.go('app.subjects.details', {label: subject.label, subject: subject, update: this.afterUpdate})
    }
}

export default {
    controller: Subjects,
    templateUrl: 'subjects.html'
}