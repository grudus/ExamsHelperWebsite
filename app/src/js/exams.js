angular.module('ExamsHelper')
    .controller('ExamsController', function ($scope, $http, BASE_URL) {
        //todo change to another service
        $http({
            url: BASE_URL + '/api/subjects',
            method: 'GET'
        }).success(function (data) {
            $scope.subjects = JSON.parse(JSON.stringify(data));
            console.log($scope.subjects);
        });


        $scope.modalShown = false;
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

        $scope.updateExam = function (exam) {
            $scope.updatedExam = exam;
            $scope.modalShown = true;
        };

        $scope.toggleModal = function () {
            $scope.modalShown = !$scope.modalShown;
            $scope.updatedExam = null;
        }
    })
    .directive('editExamDialog', function (BASE_URL) {
        return {
            restrict: 'E',
            scope: {
                show: '=',
                exam: '=',
                exams: '=',
                subjects: "=" //todo chagnge to one way
            },
            replace: true,
            transclude: true,
            link: function (scope, element, attrs) {
                console.log('dupa');
                scope.dialogStyle = {};

                if (attrs.width)
                    scope.dialogStyle.width = attrs.width;
                if (attrs.height)
                    scope.dialogStyle.height = attrs.height;


                scope.hideModal = function () {
                    scope.show = false;
                };

                scope.saveOrUpdateExam = function(exam) {
                    scope.hideModal()
                }





            }, templateUrl: 'html/exams-dialog.html'

        }
    })
;
