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
        $scope.toggleModal = function() {
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
                let colors = ['#EC644B', '#D24D57', '#DB0A5B', '#F64747', '#F1A9A0', '#D2527F', '#F62459', '#DCC6E0', '#663399', '#674172', '#AEA8D3', '#446CB3', '#E4F1FE', '#4183D7', '#81CFE0', '#4ECDC4', '#A2DED0', '#87D37C', '#90C695', '#03C9A9', '#68C3A3', '#F5D76E', '#e9d460', '#FDE3A7', '#F89406', '#ececec', '#6C7A89']
                scope.dialogStyle = {};
                scope.randomColor = function () {
                    let color = colors[Math.floor(Math.random()*colors.length)];
                    return color;
                };
                if (attrs.width)
                    scope.dialogStyle.width = attrs.width;
                if (attrs.height)
                    scope.dialogStyle.height = attrs.height;
                scope.hideModal = function () {
                    scope.show = false;
                };

                scope.saveSubject = function (subject) {
                    scope.hideModal();
                    let label = document.getElementById('ng-modal-dialog-subject-label').value;
                    let color = document.getElementById('ng-modal-dialog-subject-color').value;
                    if (subject) {
                        console.log(JSON.parse(JSON.stringify(subject)));
                    } else color = scope.randomColor();
                    console.log("new label: " + label);
                    console.log("new color: " + color);
                }
            },
            templateUrl: 'html/subjects-dialog.html'
        }
    })

;

