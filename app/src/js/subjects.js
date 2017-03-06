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

        $scope.deleteSubject = function (subject, event) {
            $http({
                url: BASE_URL + `/api/subjects/${subject.id}`,
                method: 'DELETE'
            }).success(function (data) {
                console.log('success!');
                $scope.subjects = $scope.subjects.filter(sub => sub !== subject);
            });
            event.stopPropagation();
        }
    })
    .directive('modalDialog', function ($http, BASE_URL) {
        return {
            restrict: 'E',
            scope: {
                show: '=',
                subjects: '=',
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

                scope.$watch("show", val => {
                    if (val) scope.show = val;
                });

                scope.$watch("subjects", val => {
                    if (val) scope.subjects = val
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

                scope.saveOrUpdateSubject = function (subject) {
                    let method = 'PUT';

                    if (!subject) {
                        subject = {label: '', color: ''};
                        method = 'POST';
                        scope.subjects.push(subject);
                    }

                    subject.label = scope.subjectLabel;
                    subject.color = scope.colors[scope.colorIndex];

                    $http({
                        url: BASE_URL + '/api/subjects',
                        method: method,
                        headers: {'Content-Type': 'application/json'},
                        data: subject
                    }).success(function (data) {
                        console.log('success!');
                    });

                    scope.hideModal();
                }
            },
            templateUrl: 'html/subjects-dialog.html'
        }
    })

;

