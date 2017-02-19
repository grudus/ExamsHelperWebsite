angular.module('ExamsHelperApp', ['ExamsHelper', 'ngRoute'])
    .controller('appName', function ($scope) {
        $scope.appName = 'ExamsHelper';
    })
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'html/login.html'})
            .when('/register', {templateUrl: 'html/register.html'})

    }]);




