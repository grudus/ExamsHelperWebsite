require('./subject.details.html');

class SubjectDetails {
    /*@ngInject*/
    constructor(ColorsService, $stateParams, SubjectsService, $state) {
        this.SubjectService = SubjectsService;
        this.$state = $state;

        if (!$stateParams.subject || !$stateParams.subject.id) {
            SubjectsService.details({label: $stateParams.label}).$promise
                .then(sub => this.subject = sub)
        } else this.subject = $stateParams.subject;
        this.colors = ColorsService.getColors();
    }

    deleteSubject() {
        this.SubjectService.delete({}, {id: this.subject.id}, () => {
            this.$state.go("app.subjects", {deletedLabel: this.subject.label});
        })
    }

    update() {
        this.SubjectService.update({}, this.subject, () => window.console.log("succcess"),
            (err) => window.console.log(err))
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
    templateUrl: 'subject.details.html'
}