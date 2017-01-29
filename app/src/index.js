class User {
    constructor(json) {
        this.email = json.email;
        this.username = json.username;
        this.registerDate = new Date(json.registerDate).toLocaleDateString("pl");
    }
}

angular.module('ExamsHelper', ['ngRoute'])
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
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        // .when('index.html', {redirectTo: '/'})
            .when('/', {templateUrl: 'html/user.html'})
            .when('/profile', {templateUrl: 'html/user.html'})
            .when('/exams', {templateUrl: 'html/exams.html'})
            .when('/subjects', {templateUrl: 'html/subjects.html'})
            .when('/stats', {templateUrl: 'html/stats.html'});

    }])
    .controller('Ctrl', function ($scope, BASE_URL, TokenService) {
        if (TokenService.getToken() == null)
            window.location = '/login';
    });



