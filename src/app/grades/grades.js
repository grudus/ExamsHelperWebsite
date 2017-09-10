export default class Grades {
    getGrades() {
        const max = 6 * 3;
        return [...new Array(max).keys()].map(i => {
            const base = (i / 3 + 1) | 0;
            let decimal = (i % 3);
            let extra;
            switch (decimal) {
                case 0:
                    decimal = -.25;
                    extra = '-';
                    break;
                case 1:
                    decimal = 0;
                    extra = '';
                    break;
                default:
                    decimal = 0.25;
                    extra = '+';
                    break;
            }

            const value = base + decimal;
            return {value: value, label: extra ? extra : value, hide: i === 0 || i === max - 1}
        })
    }
}