import Exams from './exams'

export default angular.module('ExamsHelper.Exams', [])
    .component('exams', Exams)
    .config( ($stateProvider) => {
        $stateProvider.state("app.exams", {
            url: "/exams",
            component: "exams"
        })
    })
    .name