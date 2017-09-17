require("./subjects.edit.html");

class EditSubject {

    changeColor(color) {
        this.subject.color = color;
    }

    getColor() {
        return this.subject.color;
    }
}


export default {
    templateUrl: "subjects.edit.html",
    controller: EditSubject,
    bindings: {
        subject: "<",
        onSubmit: "&",
        onDelete: "&"
    }

}