angular.module('ExamsHelper')
    .controller('SubjectsController', function ($scope, $http, BASE_URL) {
        if (!$scope.subjects)
            $http({
                url: BASE_URL + '/api/subjects',
                method: 'GET'
            }).success(function (data) {
                $scope.subjects = JSON.parse(JSON.stringify(data));
                console.log($scope.subjects);
            });


        $scope.modalShown = false;
        $scope.toggleModal = function () {
            $scope.modalShown = !$scope.modalShown;
            $scope.updatedSubject = null;
        };

        $scope.updateSubject = function (subject) {
            $scope.updatedSubject = subject;
            $scope.modalShown = true;
        };
    })
    .directive('modalDialog', function () {
        return {
            restrict: 'E',
            scope: {
                show: '=',
                subject: '='
            },
            replace: true,
            transclude: true,
            link: function (scope, element, attrs) {
                scope.colorIndex = 0;
                scope.colors = ['#2c3e50', '#1abc9c', '#3498db', '#9b59b6', '#1E824C',
                    '#d35400', '#e74c3c', '#f39c12', '#8e44ad', '#6C7A89'];
                scope.dialogStyle = {};

                scope.$watch("subject", function (val) {
                    if (!val) return;
                    scope.colorIndex = scope.colors.findIndex(x => x == val.color);
                    scope.subjectLabel = val.label;
                });

                scope.$watch("show", function (val) {
                    if (val)
                        scope.show = val;
                });

                if (attrs.width)
                    scope.dialogStyle.width = attrs.width;
                if (attrs.height)
                    scope.dialogStyle.height = attrs.height;

                scope.hideModal = function () {
                    scope.show = false;
                };

                scope.selectColor = function (index) {
                    scope.colorIndex = index;
                };

                scope.saveSubject = function (subject) {
                    scope.hideModal();
                    if (subject) {
                        console.log(JSON.parse(JSON.stringify(subject)));
                        subject.label = scope.subjectLabel;
                        subject.color = scope.colors[scope.colorIndex];
                    }
                }
            },
            templateUrl: 'html/subjects-dialog.html'
        }
    })

;

