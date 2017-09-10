require('./subject.details.html');

class SubjectDetails {
    /*@ngInject*/
    constructor(ColorsService, SubjectsService, SubjectExamsService, $state, $stateParams) {
        this.SubjectService = SubjectsService;
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.colors = ColorsService.getColors();
        this.SubjectExamsService = SubjectExamsService;
    }

    async $onInit() {
        if (!this.$stateParams.subject || !this.$stateParams.subject.id) {
            this.subject = await this.SubjectService.details({label: this.$stateParams.label}).$promise
        } else this.subject = this.$stateParams.subject;

        this.examsWithoutGrade = await this.SubjectExamsService.getForSubject({}, {id: this.subject.id});
    }

    async deleteSubject() {
        await this.SubjectService.delete({}, {id: this.subject.id}).$promise;
        this.$state.go("app.subjects", {deletedLabel: this.subject.label}, {reload: "app.subjects"})
    }

    async update() {
        await this.SubjectService.update({}, this.subject).$promise;
        this.$state.go("app.subjects", {}, {reload: "app.subjects"})
    }

    changeColor(color) {
        this.subject.color = color;
    }

    getColor() {
        return this.subject.color;
    }
}

export default {
    controller: SubjectDetails,
    templateUrl: 'subject.details.html',
}