import InputTaken from "./input.taken"
import Modal from "./modal/modal"

export default angular.module('ExamsHelper.Utils', [])
    .directive("inputTaken", InputTaken)
    .directive('modal', Modal)
    .name;
