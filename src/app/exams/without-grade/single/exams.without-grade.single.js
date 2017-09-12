require("./exams.without-grade.single.html");

class ExamWithoutGrade {
    /*@ngInject*/
    constructor(Grades) {
        this.grades = Grades.getGrades();
    }

    toggleShow() {
        this.show = !this.show;
    }


}

export default {
    controller: ExamWithoutGrade,
    templateUrl: "exams.without-grade.single.html",
    bindings: {
        exam: '<',
        selectGrade: '&'
    }
}