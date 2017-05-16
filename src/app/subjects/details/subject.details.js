require('./subject.details.html');

class SubjectDetails {
    /*@ngInject*/
    constructor(ColorsService, $stateParams, SubjectsService) {
        if (!$stateParams.subject) {
            SubjectsService.details({label: $stateParams.label}).$promise
                .then(sub => this.subject = sub)
        } else this.subject = $stateParams.subject;
        this.colors = ColorsService.getColors();

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