require("./timepicker.html");
import GrudusTimepicker from "grudus-timepicker/dist/grudus-timepicker"

class Timepicker {

    /*@ngInject*/
    constructor($timeout) {
        this.$timepout = $timeout;
    }

    $onInit() {
        this.time = this.initTime || new Date();
        this.timeDisplayed = GrudusTimepicker.format(this.time);
    }

    showPicker() {
        GrudusTimepicker.showPicker({
            time: this.time,
            onSubmit: (time) => this.changeTime(time)
        });
    }

    changeTime(time) {
        this.onSubmit({time: time});
        this.$timepout(() => {
            this.time = time;
            this.timeDisplayed = time.formatted();
        });

    }
}


export default {
    templateUrl: 'timepicker.html',
    controller: Timepicker,
    bindings: {
        'placeholder': '@',
        'initTime': '<',
        'onSubmit': '&'
    }
}