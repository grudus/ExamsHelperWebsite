require('./subjects.html')

class Subjects {
    /*@ngInject */
    constructor(SubjectsService, $state, $stateParams) {
        this.SubjectsService = SubjectsService;
        this.$state = $state;
        this.$stateParams = $stateParams;
        window.console.log("suybjects constructor");
        if ($stateParams.deletedLabel) {
            this.subjects = this.subjects.filter(sub => sub.label !== $stateParams.deletedLabel);
        }

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

    onDelete(subject) {
        this.subjects = this.subjects.filter(sub => sub.id !== subject.id);
    }

    details(subject) {
        this.$state.go('app.subjects.details', {label: subject.label, subject: subject})
    }
}

export default {
    controller: Subjects,
    templateUrl: 'subjects.html'
}