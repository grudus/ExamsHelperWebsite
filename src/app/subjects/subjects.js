require('./subjects.html')

class Subjects {
    /*@ngInject */
    constructor(SubjectsService) {
        this.SubjectsService = SubjectsService;
        this.dupa = 'gafaagag';
        this.showModal = false;

        SubjectsService.query().$promise.then(res => {
            window.console.table(res);
            this.subjects = res;
        })


    }
}

export default {
    controller: Subjects,
    templateUrl: 'subjects.html'
}