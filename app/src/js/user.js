angular.module('ExamsHelper')
    .controller('UserController', function ($scope, $http, $filter, BASE_URL) {
        $http({
            url: BASE_URL + '/api/user',
            method: 'GET'
        }).success(function (data) {
            console.log(JSON.parse(JSON.stringify(data)));
            $scope.user = new User(JSON.parse(JSON.stringify(data)), $filter);
        })
    });
