require("./stats.average.html");

class Average {
    /*@ngInject*/
    constructor(StatsService, $timeout) {
        this.StatsService = StatsService;
        this.$timeout = $timeout;
        this.options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }

    async $onInit() {
        this.average = await this.StatsService.average({subjectId: this.subjectId}).$promise;

        this.$timeout(() => {
            this.labels = this.average.map(av => av.month.name);
            this.data = this.average.map(av => av.averageGrade);
        });
    }
}

export default {
    controller: Average,
    templateUrl: "stats.average.html",
    bindings: {
        subjectId: '<'
    }
}