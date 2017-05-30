import Exams from "./exams";
import ExamsService from "./exams.service";

export default angular.module('ExamsHelper.Exams', [])
    .service("ExamsService", ExamsService)
    .component("exams", Exams)
    .config( ($stateProvider) => {
        $stateProvider.state("app.exams", {
            url: "/exams",
            component: "exams"
        })
    })
    .name;