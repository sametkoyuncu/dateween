# What is this?
Get the number of days (or seconds, minutes etc.) between two dates in JavaScript.

# Installation

`npm i dateween --save`

# Usage

```
const dateween = require('dateween');

console.log(dateween.getDays("2021-12-3", "2020-1-24"));
/*
    output -> 679
*/

console.log(dateween.getAllInOne("2021-12-3", "2020-1-24"));
/*
    output ->
    AllInOne {
        year: 1.8602739726027397,
        month: 22.633333333333333,
        week: 97,
        day: 679,
        minute: 977760,
        second: 58665600,
        millisecond: 58665600000,
        microsecond: 58665600000000,
        nanosecond: 58665600000000000
    }
*/
```
# All Functions
```
getYears
getMonths //one month is 30 days
getWeeks
getDays
getHours
getMinutes
getSeconds
getMilliseconds
getMicroseconds
getNanoseconds
getAllInOne //return object
```