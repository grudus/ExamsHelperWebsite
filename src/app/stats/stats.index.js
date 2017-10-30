import Stats from "./stats";
import StatsService from "./stats.service";
import AverageStats from "./average/stats.average";

export default angular.module('ExamsHelper.Stats', [])
    .component("stats", Stats)
    .service('StatsService', StatsService)
    .component("averageStats", AverageStats)
    .config( ($stateProvider) => {
        $stateProvider.state("app.stats", {
            url: "/stats",
            component: "stats"
        })
    })
    .name;