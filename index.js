
function turntimestamp(date) {
    return new Date(date).getTime()
}

function getyears(date1, date2) {
    return (turntimestamp(date1)-turntimestamp(date2)) / (365*24*60*60*1000)
}

function getmonths(date1, date2) {
    return (turntimestamp(date1)-turntimestamp(date2)) / (30*24*60*60*1000)
}

function getweeks(date1, date2) {
    return (turntimestamp(date1)-turntimestamp(date2)) / (7*24*60*60*1000)
}

function getdays(date1, date2) {
    return (turntimestamp(date1)-turntimestamp(date2)) / (24*60*60*1000)
}

function gethours(date1, date2) {
    return (turntimestamp(date1)-turntimestamp(date2)) / (60*60*1000)
}

function getminutes(date1, date2) {
    return (turntimestamp(date1)-turntimestamp(date2)) / (60*1000)
}

function getseconds(date1, date2) {
    return (turntimestamp(date1)-turntimestamp(date2)) / 1000
}

function getmilliseconds(date1, date2) {
    return turntimestamp(date1)-turntimestamp(date2)
}

function getmicroseconds(date1, date2) {
    return (turntimestamp(date1)-turntimestamp(date2)) * 1000
}

function getnanoseconds(date1, date2) {
    return (turntimestamp(date1)-turntimestamp(date2)) * (1000 * 1000)
}

module.exports = {
    getyears, 
    getmonths, 
    getweeks, 
    getdays, 
    gethours,
    getminutes,
    getseconds,
    getmilliseconds,
    getmicroseconds,
    getnanoseconds
}