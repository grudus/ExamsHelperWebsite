import "../assets/sass/exams.scss";
import "materialize-css/sass/materialize.scss";
import "materialize-css/dist/js/materialize";

import angular from "angular";
import uiRouter from "angular-ui-router";
import translate from "angular-translate";
import translateLocal from "angular-translate-storage-local";
import translateCookie from "angular-translate-storage-cookie";
import translateLoader from "angular-translate-loader-static-files";
import angularCookies from "angular-cookies";
import ngResource from "angular-resource";

import Auth from "./auth/auth.index";
import App from "./panel/app.index";
import User from "./user/user.index";
import Exams from "./exams/exams.index";
import Subjects from "./subjects/subjects.index";
import Utils from "./utils/utils.index";
import Error from "./error/error.index";
import Colors from "./colors/colors.index";

import Config from "./config";

angular.module("ExamsHelper", [
    uiRouter,
    angularCookies,
    translate,
    translateLocal,
    translateCookie,
    translateLoader,
    ngResource,

    Auth,
    App,
    User,
    Exams,
    Subjects,
    Error,
    Colors,
    Utils
]).config(Config)
    .constant('API', 'http://localhost:8080/api')
    .constant('AUTH_HEADER', 'X-AUTH-TOKEN')
;

angular.element(document).ready(function ($state) {
    angular.bootstrap(document, ["ExamsHelper"], {strictDi: true});
});