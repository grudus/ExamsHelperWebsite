import App from "./app"
import MenuTop from "./top/menu.top"

export default angular.module("ExamsHelper.App", [])
    .component('app', App)
    .component('menuTop', MenuTop)
    .name