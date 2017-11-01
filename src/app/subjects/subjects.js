require('./subjects.html');

class Subjects {
    /*@ngInject */
    constructor(SubjectsService, $state) {
        this.SubjectsService = SubjectsService;
        this.$state = $state;
        this.showModal = false;
        this.loading = true;
    }

    async $onInit() {
        this.subjects = await this.SubjectsService.query();
        this.loading = false;
    }

    addNewSubject(subject) {
        this.SubjectsService.add({}, subject, (res) => {
            subject.id = res.id;
            this.subjects.push(subject)
        });
    }

    details(subject) {
        this.$state.go('app.subjects.details', {id: subject.id, update: this.afterUpdate})
    }
}

export default {
    controller: Subjects,
    templateUrl: 'subjects.html'
}