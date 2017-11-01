import Exams from "./exams";
import ExamsService from "./exams.service";
import NewExam from "./new/exams.new";

import UpcomingExams from "./upcoming/exams.upcoming"
import PastExams from "./past/exams.past"

import WithoutGrade from "./without-grade/exams.without-grade"
import SingleWithoutGrade from "./without-grade/single/exams.without-grade.single"

import ExamsSubjectService from "./exams.subject.service"

export default angular.module('ExamsHelper.Exams', [])
    .service("ExamsService", ExamsService)
    .component("exams", Exams)
    .component("upcomingExams", UpcomingExams)
    .component("pastExams", PastExams)
    .component("newExam", NewExam)
    .component("examsWithoutGrade", WithoutGrade)
    .component("examWithoutGrade", SingleWithoutGrade)
    .service("ExamsSubjectService", ExamsSubjectService)
    .config(($stateProvider) => {
        $stateProvider.state("app.exams", {
            component: "exams",
            abstract: true,
            resolve: {
                examsPerDay: (ExamsService, moment) =>
                    ExamsService.getAllAsMap({dateFrom: moment().format()}).$promise,
                withoutGradeCount: (ExamsService) => ExamsService.countWithoutGrade().$promise,
                examsWithoutGrade: (ExamsSubjectService) => ExamsSubjectService.getForSubject().$promise
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