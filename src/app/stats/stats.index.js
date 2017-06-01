import Stats from "./stats";

export default angular.module('ExamsHelper.Stats', [])
    .component("stats", Stats)
    .config( ($stateProvider) => {
        $stateProvider.state("app.stats", {
            url: "/stats",
            component: "stats"
        })
    })
    .name;