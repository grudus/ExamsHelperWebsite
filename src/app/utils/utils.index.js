import InputTaken from "./input.taken"
import Modal from "./modal/modal"
import TextInput from "./input/input.text"

export default angular.module('ExamsHelper.Utils', [])
    .directive("inputTaken", InputTaken)
    .directive('modal', Modal)
    .directive('textInput', TextInput)
    .name;
