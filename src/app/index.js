import "../assets/sass/materialize.scss";
import "../assets/sass/exams.scss";

import angular from "angular";
import uiRouter from "angular-ui-router";
import translate from "angular-translate";
import translateLocal from "angular-translate-storage-local";
import translateCookie from "angular-translate-storage-cookie";
import translateLoader from "angular-translate-loader-static-files";
import angularCookies from "angular-cookies";

import App from "./panel/app.index"
import User from "./user/user.index"

import Config from "./config"

angular.module("ExamsHelper", [
    uiRouter,
    angularCookies,
    translate,
    translateLocal,
    translateCookie,
    translateLoader,

    App,
    User
]).config(Config);

angular.element(document).ready(function ($state) {
    angular.bootstrap(document, ["ExamsHelper"], {strictDi: true});
});