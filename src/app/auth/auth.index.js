import Auth from "./auth"
import AuthService from "./auth.service"
import Authorization from "./authorization"
import Login from "./login/login"
import Register from "./register/register"

export default angular.module('ExamsHelper.Auth', [])
    .service("AuthService", AuthService)
    .service("Authorization", Authorization)
    .component("login", Login)
    .component("auth", Auth)
    .component("register", Register)
    .config(($stateProvider) => {
        $stateProvider
            .state("auth", {
                abstract: true,
                template: "<div ui-view></div>"
            })
            .state("auth.login", {
                url: "/login",
                component: "login"
            })
            .state("auth.register", {
                url: "/register",
                component: "register"
            })
    })

    .name