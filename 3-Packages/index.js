/*****************************************************
 * Moment examples
 */

 // Basic formatting
var moment = require('moment');
console.log(moment().format());

// Subtract time
var a = new moment("2020-01-03 12:12:12");
var b = moment.duration(2, 'd');
var duration = a.subtract(b);
console.log(duration.format());

/*****************************************************
 * UUID examples
 */
const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());
console.log(uuidv4());
console.log(uuidv4());