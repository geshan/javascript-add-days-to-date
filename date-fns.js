const dateFns = require('date-fns');

let aWeekLater = dateFns.addDays(new Date(), 7);
console.log(`Date after a week is ${aWeekLater.toDateString()}`);

const aWeekAfter1Jan2022 = dateFns.addDays(new Date('2022-01-01'),  7);
console.log(`Date after a week of 2022-01-01 is ${aWeekAfter1Jan2022.toDateString()}`);
