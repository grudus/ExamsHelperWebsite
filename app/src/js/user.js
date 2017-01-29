angular.module('ExamsHelper')
    .controller('UserController', function ($scope, $http, BASE_URL) {
        $http({
            url: BASE_URL + '/api/user',
            method: 'GET'
        }).success(function (data) {
            $scope.user = new User(JSON.parse(JSON.stringify(data)));
        })
    });
