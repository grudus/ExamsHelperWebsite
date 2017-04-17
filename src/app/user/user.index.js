import User from "./user"
import UserService from "./user.service"

export default angular.module('ExamsHelper.User', [])
    .service("UserService", UserService)
    .component("user", User)
    .config( ($stateProvider) => {
        $stateProvider.state("app.user", {
            url: "/",
            component: "user"
        })
    })
    .name;