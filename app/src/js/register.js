angular.module('ExamsHelperApp')
    .controller('singUpForm', function ($scope, $http, BASE_URL) {
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
            })


                .success(function (data) {
                    console.log('success! ' + data);
                }).error(function (error) {
                console.log('error ' + JSON.stringify(error));
            })

    }});

