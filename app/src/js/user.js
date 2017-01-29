angular.module('ExamsHelper')
    .controller('appName', function ($scope, $http, BASE_URL) {
        $scope.appName = 'Ładnie się załadowało';

        $http({
            url: BASE_URL + '/api/user',
            method: 'GET'
        }).success(function (data) {
            $scope.user = new User(JSON.parse(JSON.stringify(data)));
        })
    });
