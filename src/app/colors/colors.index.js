import ColorsService from "./colors.service"
import ColorsChoice from "./colors.choice"

export default angular.module("ExamsHelper.Colors", [])
    .service("ColorsService", ColorsService)
    .component("colorChoice", ColorsChoice)
    .name