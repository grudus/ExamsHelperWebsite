require('./stats.html')

class Stats {
    constructor() {
        this.itemArray = [
            {id: 1, name: 'first'},
            {id: 2, name: 'second'},
            {id: 3, name: 'third'},
            {id: 4, name: 'fourth'},
            {id: 5, name: 'fifth'},
        ];

        this.selectedItem = this.itemArray[0];
    }
}

export default {
    controller: Stats,
    templateUrl: 'stats.html'
}