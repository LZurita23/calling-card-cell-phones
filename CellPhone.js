const CallingCard = require('./CallingCard.js');

class CellPhone extends CallingCard {

    constructor (centsPerMinute, card){
        super(centsPerMinute);
        this.card = card;
        this.call = "";
        this.isTalking = false;
        this.getHistory = "";
        this.tick = 0;

    }

    call(number){
        this.isTalking = true;
        this.call = number;

    }
    isTalking() {
        return this.isTalking;
    }

    tick() {
        this.tick ++;
        this.minutes -= tick;
    }

    endCall() {
        this.isTalking = false;
    }

    getHistory() {
        //add code
    }


}

module.exports = CellPhone;