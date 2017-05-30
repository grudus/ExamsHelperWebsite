import InputTaken from "./input.taken";
import AlertModal from "./modal/alert/modal.alert";
import ConfirmationModal from "./modal/confirmation/modal.confirmation";
import TextInput from "./input/input.text";
import FloatingActionButton from "./fab/fab";

export default angular.module('ExamsHelper.Utils', [])
    .directive("inputTaken", InputTaken)
    .directive('modalAlert', AlertModal)
    .directive('modalConfirmation', ConfirmationModal)
    .directive('textInput', TextInput)
    .directive('fab', FloatingActionButton)
    .name;
