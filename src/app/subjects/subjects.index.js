import Subjects from './subjects'
import NewSubject from "./new/subjects.new"
import SubjectsService from "./subjects.service"

export default angular.module('ExamsHelper.Subjects', [])
    .component('subjects', Subjects)
    .component('newSubject', NewSubject)
    .service('SubjectsService', SubjectsService)
    .config( ($stateProvider) => {
        $stateProvider.state("app.subjects", {
            url: "/subjects",
            component: "subjects"
        })
    })
    .name