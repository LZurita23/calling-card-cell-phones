const CallingCard = require('./CallingCard.js');

class CellPhone extends CallingCard {

    constructor (centsPerMinute, card){
        super(centsPerMinute);

        this.card = card;
        this.phoneNumber = "";
        this.talking = false;
        this.minutesUsed = 0;
        this.callHistory = "";        

    }

    call(phoneNumber){
        this.talking = true;
        this.phoneNumber = phoneNumber;
    }

    isTalking() {
        return this.talking;
    }

    tick() {
        if(CallingCard.minutes <=0) {
            this.endCall();
        }else {
        this.minutesUsed ++;
        CallingCard.minutes -= this.minutesUsed;
        }
    }

    endCall() {
        this.talking = false;
        let minutes = "";
        if(this.minutesUsed <= 1){
            minutes = "minute";
        } else {
            minutes = "minutes";
        }
        if(this.callHistory.length > 1){
            this.callHistory = this.callHistory.concat(", " + this.phoneNumber + " (" + this.minutesUsed + " " + minutes +")");
        } 
        else {
            this.callHistory = this.callHistory.concat(this.phoneNumber + " (" + this.minutesUsed + " " + minutes +")");
        }
        this.minutesUsed = 0;
       
    }

    getHistory() {        
       console.log(this.callHistory);
    }

}

module.exports = CellPhone;