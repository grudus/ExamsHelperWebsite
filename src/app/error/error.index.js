import error from "./error";
import notFound from "./not-found/error.not-found";
import forbidden from "./forbidden/error.forbidden";

export default angular.module('ExamsHelper.Error', [])
    .component('error', error)
    .component('notFound', notFound)
    .component('forbidden', forbidden)
    .config( ($stateProvider) => {
        $stateProvider.state("error", {
            url: "/error",
            component: "error"
        })
            .state("error.notFound", {
                url: "/404",
                component: "notFound"
            })
            .state("error.forbidden", {
                url: "/403",
                component: "forbidden"
            })
    })
    .name