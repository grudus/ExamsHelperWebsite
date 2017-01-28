class User {
    constructor(json) {
        this.email = json.email;
        this.username = json.username;
    }
}
angular.module('ExamsHelper', [])
    .constant('BASE_URL', 'http://localhost:8080')
    .factory('TokenService', function () {
        return {
            setToken: function (t) {
                localStorage.setItem('token', t)
            },

            getToken: function () {
                return localStorage.getItem('token');
            }
        }
    })
    .factory('httpRequestInterceptor', function (TokenService) {
        return {
            request: function (config) {
                config.headers = {'x-auth-token': TokenService.getToken()};
                return config;
            }
        }
    })
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('httpRequestInterceptor');
    }])
    .controller('Ctrl', function ($scope, $http, BASE_URL, TokenService) {
        if (TokenService.getToken() == null)
            window.location = '/login';

        $http({
            url: BASE_URL + '/api/user',
            method: 'GET'
        }).success(function (data) {
            $scope.user = new User(JSON.parse(JSON.stringify(data)));
        })

    });



