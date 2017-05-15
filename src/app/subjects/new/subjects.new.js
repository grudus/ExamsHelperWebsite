require('./subjects.new.html');

class NewSubject {

    constructor() {
        this.colors = ['#2c3e50', '#1abc9c', '#3498db', '#9b59b6', '#1E824C',
            '#d35400', '#e74c3c', '#f39c12', '#8e44ad', '#6C7A89', '#DB5A6B', '#CA6924'];

        this.colorIndex = 0;
        this.subject = {color: this.colors[this.colorIndex]};
    }

    selectColor(index) {
        this.subject.color = this.colors[index];
        this.colorIndex = index;
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
        hide: '&',
    }
}