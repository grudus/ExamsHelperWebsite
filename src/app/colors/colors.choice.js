require("./colors.choice.html")

class ColorsChoice {
    /*@ngInject*/
    constructor(ColorsService) {
        this.colors = ColorsService.getColors();

    }

    $onInit() {
        this.colorIndex = this.color ? this.colors.indexOf(this.color) : 0;
    }

    selectColor(index) {
        this.colorIndex = index;
        this.onChange({color: this.colors[index]});
    }
}

export default {
    templateUrl: "colors.choice.html",
    controller: ColorsChoice,
    bindings: {
        onChange: '&',
        color: '='
    }
}