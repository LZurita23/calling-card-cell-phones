const CallingCard = require('./CallingCard.js');
const CellPhone = require('./CellPhone.js');

let card = new CallingCard(10);
card.addDollars(1); // add 100 cents @ 10 cents/minute = 10 minutes added
let phone = new CellPhone(card);

phone.isTalking();  // => returns false

phone.call("555-1212");
phone.isTalking();  // => returns true
phone.tick();       // simulate a minute going by
phone.tick();       // simulate another minute going by
phone.endCall();
phone.isTalking();  // => returns false (because the call is over)
//phone.getHistory(); // => returns "555-1212 (2 minutes)"

 // => return 8, because the call lasted 2 minute


phone.isTalking();  // => returns false

phone.call("555-1313");
phone.isTalking();  // => returns true
phone.tick();       // simulate a minute going by
phone.tick();       // simulate another minute going by
phone.tick();
phone.tick();
phone.endCall();
phone.getHistory();