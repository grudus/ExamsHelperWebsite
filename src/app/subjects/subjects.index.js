import Subjects from './subjects'
import SubjectsService from "./subjects.service"

export default angular.module('ExamsHelper.Subjects', [])
    .component('subjects', Subjects)
    .service('SubjectsService', SubjectsService)
    .config( ($stateProvider) => {
        $stateProvider.state("app.subjects", {
            url: "/subjects",
            component: "subjects"
        })
    })
    .name