require("./timepicker.html");
import {showPicker} from "grudus-timepicker/dist/grudus-timepicker"

class Timepicker {

    /*@ngInject*/
    constructor($timeout) {
        this.$timepout = $timeout;

        const now = new Date();
        this.timeDisplayed = `${now.getHours()}:${now.getMinutes()}`;
        this.Timepicker = {showPicker: () => showPicker({
            time: this.time,
            onSubmit: (time) => this.changeTime(time)
        })}
    }

    changeTime(time) {
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
        'placeholder': '@'
    }
}