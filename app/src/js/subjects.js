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
                scope.dialogStyle = {};
                if (attrs.width)
                    scope.dialogStyle.width = attrs.width;
                if (attrs.height)
                    scope.dialogStyle.height = attrs.height;
                scope.hideModal = function () {
                    scope.show = false;
                };
            },
            templateUrl: 'html/subjects-dialog.html'
        }
    })

;

