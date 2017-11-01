require('./subject.details.html');

class SubjectDetails {
    /*@ngInject*/
    constructor(SubjectsService, ExamsSubjectService, $state, $stateParams) {
        this.SubjectService = SubjectsService;
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.ExamsSubjectService = ExamsSubjectService;
    }

    async $onInit() {
        this.subject = await this.SubjectService.details({}, {id: this.$stateParams.id}).$promise;
        this.examsWithoutGrade = await this.ExamsSubjectService.getForSubject({subjectId: this.subject.id});
    }

    async deleteSubject() {
        await this.SubjectService.delete({}, {id: this.subject.id}).$promise;
        this.$state.go("app.subjects", {deletedLabel: this.subject.label}, {reload: "app.subjects"})
    }

    async update() {
        await this.SubjectService.update({}, this.subject).$promise;
        this.$state.go("app.subjects", {}, {reload: "app.subjects"})
    }
}

export default {
    controller: SubjectDetails,
    templateUrl: 'subject.details.html',
}