require('./exams.html');

class Exams {
    /*@ngInject */
    constructor(ExamsService) {
        this.ExamsService = ExamsService;
        this.ExamsService.getAllAsMap().$promise
            .then(res => this.convertToMap(res))
    }

    convertToMap(exams) {
        this.examsPerDay = exams;
    }
}

export default {
    controller: Exams,
    templateUrl: 'exams.html'
}