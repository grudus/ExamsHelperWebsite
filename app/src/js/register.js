angular.module('ExamsHelperApp')
    .controller('SignUpController', function ($scope, $http, BASE_URL) {
        $scope.register = function () {

            const user = {
                username: $scope.username,
                password: $scope.password,
                email: $scope.email
            };

            $http({
                url: BASE_URL + '/api/auth/register',
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                data: user
            }).success(function (data) {
                console.log('success! ' + data);
                $scope.errors = 'Confirmation message was sent to your email'
            }).error(function (error) {
                switch (error[0]) {
                    case 'USERNAME.EXISTS':
                        $scope.errors = 'Username already exists';
                        break;
                    case 'EMAIL.EXISTS':
                        $scope.errors = 'Email already exists';
                        break;
                    default:
                        $scope.errors = 'An error occurs';
                }
            })

        }
    });

