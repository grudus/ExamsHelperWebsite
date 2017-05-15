require("./colors.choice.html")

class ColorsChoice {
    /*@ngInject*/
    constructor(ColorsService) {
        this.colors = ColorsService.getColors();
        this.colorIndex = 0;
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
        onChange: '&'
    }
}