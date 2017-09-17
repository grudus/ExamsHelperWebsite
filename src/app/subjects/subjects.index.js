import Subjects from "./subjects";
import NewSubject from "./new/subjects.new";
import SubjectsService from "./subjects.service";
import SubjectDetails from "./details/subject.details";
import SubjectExamsService from "./subjects.exams.service"
import EditSubject from "./edit/subjects.edit"

export default angular.module('ExamsHelper.Subjects', [])
    .component('subjects', Subjects)
    .component('newSubject', NewSubject)
    .component('subjectDetails', SubjectDetails)
    .component('editSubject', EditSubject)
    .service('SubjectsService', SubjectsService)
    .service('SubjectExamsService', SubjectExamsService)
    .config(($stateProvider) => {
        $stateProvider.state("app.subjects", {
            url: "/subjects",
            component: "subjects"
        })
            .state('app.subjects.details', {
                url: "/:label",
                component: "subjectDetails",
                params: {
                    subject: null
                }
            })
    })
    .name