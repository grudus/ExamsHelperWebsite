require('./dropdown.html')

export default {
    templateUrl: 'dropdown.html',
    bindings: {
        'selected': '=',
        'placeholder': '<',
        'items': '<',
        'label': '<'
    }
}