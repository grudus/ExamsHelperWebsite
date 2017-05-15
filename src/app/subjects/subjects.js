require('./subjects.html')

class Subjects {
    /*@ngInject */
    constructor(SubjectsService, $state, $stateParams) {
        this.SubjectsService = SubjectsService;
        this.$state = $state;
        this.$stateParams = $stateParams;

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
        this.$state.go('app.subjects.details', {label: subject.label, subject: subject})
    }
}

export default {
    controller: Subjects,
    templateUrl: 'subjects.html'
}