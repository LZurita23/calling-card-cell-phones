const CallingCard = require('./CallingCard.js');
const CellPhone = require('./CellPhone.js');

let card = new CallingCard(10);
card.addDollars(1);
let phone = new CellPhone(card);
console.log(phone);
