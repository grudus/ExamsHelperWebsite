import "../assets/sass/materialize.scss";
import "./text.js"

import angular from "angular";
import uiRouter from "angular-ui-router";
import translate from "angular-translate";
import translateLocal from "angular-translate-storage-local";
import translateCookie from "angular-translate-storage-cookie";
import translateLoader from "angular-translate-loader-static-files";
import angularCookies from "angular-cookies";

import Config from "./config"

angular.module("ExamsHelper", [
    uiRouter,
    angularCookies,
    translate,
    translateLocal,
    translateCookie,
    translateLoader
]).config(Config);

angular.element(document).ready(function () {
    angular.bootstrap(document, ["ExamsHelper"], {strictDi: true});
});