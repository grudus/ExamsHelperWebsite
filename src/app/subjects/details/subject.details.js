require('./subject.details.html');

class SubjectDetails {
    /*@ngInject*/
    constructor(ColorsService, $stateParams, SubjectsService, $state) {
        this.SubjectService = SubjectsService;
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.colors = ColorsService.getColors();
    }

    async $onInit() {
        if (!this.$stateParams.subject || !this.$stateParams.subject.id) {
            this.subject = await this.SubjectService.details({label: this.$stateParams.label})
        } else this.subject = this.$stateParams.subject;
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