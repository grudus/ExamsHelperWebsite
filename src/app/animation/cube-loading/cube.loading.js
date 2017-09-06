require("./cube.loading.html");

class CubeLoading {
    constructor() {
        console.log("DUPA")
    }
}

export default {
    templateUrl: 'cube.loading.html',
    controller: CubeLoading,
    bindings: {
        loading: '<'
    }
}