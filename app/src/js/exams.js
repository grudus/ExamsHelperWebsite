angular.module('ExamsHelper')
    .controller('ExamsController', function ($scope, $http, BASE_URL) {
        $http({
            url: BASE_URL + "/api/exams",
            method: 'GET'
        }).success(function (data) {
            if (data.length)
                $scope.exams = {};
            data.sort((exam1, exam2) => exam2.date.localeCompare(exam1.date))
                .forEach(exam => {
                    const key = exam.date.split(" ")[0];
                    if (key in $scope.exams == false) {
                        $scope.exams[key] = [];
                    }
                    $scope.exams[key].push(exam);
                });
            console.log($scope.exams)
        });

    });
