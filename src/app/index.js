import "../assets/sass/examshelper.main.scss";
import "materialize-css/sass/materialize.scss";
import "materialize-css/dist/js/materialize";
import "ui-select/dist/select.css";
import "selectize/dist/css/selectize.css";
import "material-datetime-picker";
import "material-datetime-picker/dist/material-datetime-picker.css";

import angular from "angular";
import uiRouter from "angular-ui-router";
import translate from "angular-translate";
import translateLocal from "angular-translate-storage-local";
import translateCookie from "angular-translate-storage-cookie";
import translateLoader from "angular-translate-loader-static-files";
import angularCookies from "angular-cookies";
import ngResource from "angular-resource";
import ngSanitize from "angular-sanitize";
import uiSelect from "ui-select";

import Auth from "./auth/auth.index";
import App from "./panel/app.index";
import User from "./user/user.index";
import Exams from "./exams/exams.index";
import Subjects from "./subjects/subjects.index";
import Utils from "./utils/utils.index";
import Error from "./error/error.index";
import Colors from "./colors/colors.index";
import Stats from "./stats/stats.index";

import Config from "./config";

angular.module("ExamsHelper", [
    uiRouter,
    angularCookies,
    translate,
    translateLocal,
    translateCookie,
    translateLoader,
    ngResource,
    ngSanitize,
    uiSelect,

    Auth,
    App,
    User,
    Exams,
    Subjects,
    Error,
    Colors,
    Stats,
    Utils
]).config(Config)
    .constant('API', 'http://localhost:8080/api')
    .constant('AUTH_HEADER', 'X-AUTH-TOKEN')
;

angular.element(document).ready(function () {
    angular.bootstrap(document, ["ExamsHelper"], {strictDi: true});
});