import InputTaken from "./input.taken"

export default angular.module('ExamsHelper.Utils', [])
    .directive("inputTaken", InputTaken)
    .name;
