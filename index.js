
function turnTimeStamp(date) {
    return new Date(date).getTime()
}

function getYears(date1, date2) {
    return (turnTimeStamp(date1)-turnTimeStamp(date2)) / (365*24*60*60*1000)
}

function getMonths(date1, date2) {
    return (turnTimeStamp(date1)-turnTimeStamp(date2)) / (30*24*60*60*1000)
}

function getWeeks(date1, date2) {
    return (turnTimeStamp(date1)-turnTimeStamp(date2)) / (7*24*60*60*1000)
}

function getDays(date1, date2) {
    return (turnTimeStamp(date1)-turnTimeStamp(date2)) / (24*60*60*1000)
}

function getHours(date1, date2) {
    return (turnTimeStamp(date1)-turnTimeStamp(date2)) / (60*60*1000)
}

function getMinutes(date1, date2) {
    return (turnTimeStamp(date1)-turnTimeStamp(date2)) / (60*1000)
}

function getSeconds(date1, date2) {
    return (turnTimeStamp(date1)-turnTimeStamp(date2)) / 1000
}

function getMilliseconds(date1, date2) {
    return turnTimeStamp(date1)-turnTimeStamp(date2)
}

function getMicroseconds(date1, date2) {
    return (turnTimeStamp(date1)-turnTimeStamp(date2)) * 1000
}

function getNanoseconds(date1, date2) {
    return (turnTimeStamp(date1)-turnTimeStamp(date2)) * (1000 * 1000)
}

module.exports = {
    getYears, 
    getMonths, 
    getWeeks, 
    getDays, 
    getHours,
    getMinutes,
    getSeconds,
    getMilliseconds,
    getMicroseconds,
    getNanoseconds
}