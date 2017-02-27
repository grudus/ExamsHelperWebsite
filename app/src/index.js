class User {
    constructor(json) {
        this.email = json.email;
        this.username = json.username;
        this.registerDate = json.registerDate;
    };

    /*{"nano":0,"second":35,"minute":55,"hour":0,"dayOfYear":52,"
     dayOfWeek":"TUESDAY","month":"FEBRUARY","dayOfMonth":21,"year":2017,"monthValue":2,"chronology":{"calendarType":"iso8601","id":"ISO"}} */

    date() {
        return this.registerDate.dayOfMonth + '/' + this.registerDate.monthValue + '/' + this.registerDate.year;
    }
}

angular.module('ExamsHelper', ['ngRoute'])
    .run(function ($rootScope, $location) {
        $rootScope.tabs = ['Profile', 'Exams', 'Subjects', 'Stats'];
        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.location = $location.path();
            console.log($rootScope.location);
        });
    })
    .constant('BASE_URL', 'http://localhost:8080')
    .factory('TokenService', function () {
        return {
            setToken: function (t) {
                localStorage.setItem('token', t)
            },

            getToken: function () {
                return localStorage.getItem('token');
            },

            clear: function () {
                localStorage.clear();
            }
        }
    })
    .factory('httpRequestInterceptor', function (TokenService) {
        return {
            request: function (config) {
                config.headers['X-AUTH-TOKEN'] = TokenService.getToken();
                return config;
            }
        }
    })
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('httpRequestInterceptor');
    }])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'html/user.html'})
            .when('/profile', {templateUrl: 'html/user.html'})
            .when('/exams', {templateUrl: 'html/exams.html'})
            .when('/subjects', {templateUrl: 'html/subjects.html'})
            .when('/stats', {templateUrl: 'html/stats.html'});

    }])
    .controller('MainController', function ($scope, BASE_URL, TokenService) {
        if (TokenService.getToken() == null)
            window.location = '/auth#/login';

        $scope.logout = function () {
            console.log("logged out");
            TokenService.clear();
            window.location = '/auth#/login';
        }
    });



