require('./datepicker.html');
import DateTimePicker from "material-datetime-picker";

class DatePicker {
    /*@ngInject*/
    constructor($timeout) {
        this.date = new Date();
        this.dateTimePicker = new DateTimePicker({default: this.date})
            .on('submit', (val) => {
                this.onSubmit({date: val.toDate()});
                $timeout(() => this.date = val.toDate()); //doesn't update automatically without timeout
            })
    }
}

export default {
    templateUrl: 'datepicker.html',
    controller: DatePicker,
    bindings: {
        'placeholder': '@',
        'onSubmit': '&'
    }
}