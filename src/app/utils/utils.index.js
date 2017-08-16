import InputTaken from "./input.taken";
import AlertModal from "./modal/alert/modal.alert";
import ConfirmationModal from "./modal/confirmation/modal.confirmation";
import TextInput from "./input/input.text";
import FloatingActionButton from "./fab/fab";
import Dropdown from "./dropdown/dropdown";
import DatePicker from "./datepicker/datepicker";
import TimePicker from "./timepicker/timepicker"

export default angular.module('ExamsHelper.Utils', [])
    .directive("inputTaken", InputTaken)
    .directive('modalAlert', AlertModal)
    .directive('modalConfirmation', ConfirmationModal)
    .directive('textInput', TextInput)
    .directive('fab', FloatingActionButton)
    .component('dropdown', Dropdown)
    .component('datepicker', DatePicker)
    .component('timepicker', TimePicker)
    .name;
