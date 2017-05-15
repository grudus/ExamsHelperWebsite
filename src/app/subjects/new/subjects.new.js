require('./subjects.new.html');

class NewSubject {

    /*@ngInject*/
    constructor(ColorsService) {
        this.colors = ColorsService.getColors();
        this.colorIndex = 0;
        this.subject = {color: this.colors[this.colorIndex]};
    }

    selectColor(index) {
        this.subject.color = this.colors[index];
        this.colorIndex = index;
    }

    onOk() {
        if (this.validSubject()) {
            this.onSubmit({subject: this.subject});
            this.onCancel()
        }
    }

    validSubject() {
        return this.subject !== undefined
        && this.subject.label !== undefined
        && this.subject.color !== undefined;
    }

}

export default {
    controller: NewSubject,
    templateUrl: 'subjects.new.html',
    bindings: {
        onCancel: '&',
        onSubmit: '&'
    }
}