require('./datepicker.html');
import DateTimePicker from "material-datetime-picker";

class DatePicker {
    /*@ngInject*/
    constructor($timeout) {
        this.date = new Date();
        this.dateTimePicker = new DateTimePicker({default: this.date})
            .on('submit', (val) => {
                $timeout(() => this.date = val.format('DD/MM/YYYY')); //doesn't update automatically without timeout
            })
    }

    open(e) {
        e.preventDefault();
        this.dateTimePicker.open();
    }
}

export default {
    templateUrl: 'datepicker.html',
    controller: DatePicker
}