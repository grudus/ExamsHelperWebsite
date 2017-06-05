import Exams from "./exams";
import ExamsService from "./exams.service";
import NewExam from "./new/exams.new";

export default angular.module('ExamsHelper.Exams', [])
    .service("ExamsService", ExamsService)
    .component("exams", Exams)
    .component("newExam", NewExam)
    .config( ($stateProvider) => {
        $stateProvider.state("app.exams", {
            url: "/exams",
            component: "exams"
        })
    })
    .name;