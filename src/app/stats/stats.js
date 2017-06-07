require('./stats.html')
import DateTimePicker from "material-datetime-picker";


class Stats {
    /*@ngInject*/
    constructor() {
        this.date = new Date();
        this.dateTimePicker = new DateTimePicker({format: 'xxxxx',  default: this.date })
            .on('submit', (val) => {
                this.date = val;
                console.log(val.format("DD/MM/YYYY"))
            })
    }

    openCalendar() {
        this.dateTimePicker.open();
    }
}

export default {
    controller: Stats,
    templateUrl: 'stats.html'
}