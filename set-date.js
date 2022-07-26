const aWeekLater = new Date();
aWeekLater.setDate(aWeekLater.getDate() + 7);

console.log(`Date after a week is ${aWeekLater.toDateString()}`);

const aWeekAfter1Jan2022 = new Date('2022-01-01');
aWeekAfter1Jan2022.setDate(aWeekAfter1Jan2022.getDate() + 7);

console.log(`Date after a week of 2022-01-01 is ${aWeekAfter1Jan2022.toDateString()}`);
