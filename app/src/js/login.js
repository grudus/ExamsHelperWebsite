angular.module('ExamsHelperApp')
    .controller('SignInController', function ($scope, $http, TokenService, BASE_URL) {
        TokenService.clear();
        $scope.tryToSignIn = function () {
            if ($scope.username == '' || $scope.password == '') {
                alert('Cannot login');
            }
            else {
                $scope.errors = null;
                $http({
                    url: BASE_URL + '/api/auth/login',
                    method: 'POST',
                    headers: {withCredentials: true},
                    params: {'username': $scope.username, 'password': $scope.password}
                }).success(function (data, status, headers) {
                    TokenService.setToken(headers()['x-auth-token']);
                    window.location = '/';
                }).error(function (error) {
                    console.log('error ' + JSON.stringify(error));
                    $scope.errors = 'Bad credentials. Try again';
                })
            }
        };
    });
