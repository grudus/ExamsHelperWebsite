import Subjects from "./subjects";
import NewSubject from "./new/subjects.new";
import SubjectsService from "./subjects.service";
import SubjectDetails from "./details/subject.details";
import EditSubject from "./edit/subjects.edit"

export default angular.module('ExamsHelper.Subjects', [])
    .component('subjects', Subjects)
    .component('newSubject', NewSubject)
    .component('subjectDetails', SubjectDetails)
    .component('editSubject', EditSubject)
    .service('SubjectsService', SubjectsService)
    .config(($stateProvider) => {
        $stateProvider.state("app.subjects", {
            url: "/subjects",
            component: "subjects"
        })
            .state('app.subjects.details', {
                url: "/:id",
                component: "subjectDetails"
            })
    })
    .name