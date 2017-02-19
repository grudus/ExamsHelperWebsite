angular.module('ExamsHelperApp')
    .controller('singInForm', function ($scope, $http, TokenService, BASE_URL) {
        TokenService.clear();
        $scope.tryToSignIn = function () {
            if ($scope.username == '' || $scope.password == '') {
                alert('Cannot login');
            }
            else {
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
                })
            }
        };
    });
