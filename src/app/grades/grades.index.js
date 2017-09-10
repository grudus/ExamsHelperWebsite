import Grades from "./grades"

export default angular.module('ExamsHelper.Grades', [])
    .service("Grades", Grades)
    .name