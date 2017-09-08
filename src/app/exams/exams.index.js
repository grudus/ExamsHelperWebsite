import Exams from "./exams";
import ExamsService from "./exams.service";
import NewExam from "./new/exams.new";

import UpcomingExams from "./upcoming/exams.upcoming"
import PastExams from "./past/exams.past"

export default angular.module('ExamsHelper.Exams', [])
    .service("ExamsService", ExamsService)
    .component("exams", Exams)
    .component("upcomingExams", UpcomingExams)
    .component("pastExams", PastExams)
    .component("newExam", NewExam)
    .config(($stateProvider) => {
        $stateProvider.state("app.exams", {
            component: "exams",
            abstract: true,
            resolve: {
                examsPerDay: (ExamsService, moment) =>
                    ExamsService.getAllAsMap({dateFrom: moment().toISOString()}).$promise
            }
        }).state("app.exams.upcoming", {
            url: "/exams/upcoming",
            component: "upcomingExams",
        }).state("app.exams.past", {
            url: "/exams/past",
            component: "pastExams"
        })
    })
    .name;