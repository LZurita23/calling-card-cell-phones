class CallingCard {
    constructor(centsPerMinute) {
        this.centsPerMinute = centsPerMinute;
        this.money = 0;
        this.minutes = 0;
    }

    addDollars(money) {
        this.money += money;
        let cents = 100 * money;
        let time = Math.floor(cents /this.centsPerMinute);
        this.minutes += time;
    }

    getRemainingMinutes() {
        return this.minutes;
    }

    useMinutes(minutes) {
        this.minutes -= minutes;
    }
}
module.exports = CallingCard;