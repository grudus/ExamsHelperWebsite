import error from './error'

export default angular.module('ExamsHelper.Exams', [])
    .component('error', error)
    .config( ($stateProvider) => {
        $stateProvider.state("error", {
            url: "/error",
            component: "error"
        })
    })
    .name