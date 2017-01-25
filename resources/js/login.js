angular.module("ExamsHelperApp-login", ['ngCookies'])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.headers.post['x-auth-token'] = 'dupa';
    }])

    .controller("appName", function ($scope) {
        $scope.appName = "ExamsHelper";
    })
    .controller("singInForm", function ($scope, $http, $cookieStore) {
        var instance = this;
        this.token = "";

        $scope.tryToSignIn = function () {
            if ($scope.username == "" || $scope.password == "") {
                alert("Cannot login");
            }
            else {
                $http({
                    url: "http://localhost:8080/api/auth/login",
                    method: "POST",
                    headers: {withCredentials: true},
                    params: {'username': $scope.username, 'password': $scope.password}
                }).success(function (data, status, headers) {
                    instance.token = headers()["x-auth-token"];
                    $http.defaults.headers.common['x-auth-token'] = instance.token;
                    $cookieStore.put("x-auth-token", instance.token);
                    instance.getInfo();
                }).error(function (error) {
                    console.log("error " + JSON.stringify(error));
                })
            }
        };

        this.getInfo = function () {
            $http.get("http://localhost:8080/api/user", {})
                .success(function (data) {
                    console.log("mamy odp" + JSON.stringify(data));
                })
        }


    });




