export default class ColorsService {
    constructor() {
        this.colors = ['#2c3e50', '#1abc9c', '#3498db', '#9b59b6', '#1E824C',
            '#d35400', '#e74c3c', '#f39c12', '#8e44ad', '#6C7A89', '#DB5A6B', '#CA6924'];
    }

    getColors() {
        return this.colors;
    }
}