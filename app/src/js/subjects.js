angular.module('ExamsHelper')
    .controller('SubjectsController', function ($scope, $http, BASE_URL) {
        $http({
            url: BASE_URL + '/api/subjects',
            method: 'GET'
        }).success(function (data) {
            $scope.subjects = JSON.parse(JSON.stringify(data));
            console.log($scope.subjects);
        })
    });

