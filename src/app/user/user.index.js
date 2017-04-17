import User from "./user"

export default angular.module('ExamsHelper.User', [])
    .component("user", User)
    .config( ($stateProvider) => {
        $stateProvider.state("app.user", {
            url: "/",
            component: "user"
        })
    })
    .name;