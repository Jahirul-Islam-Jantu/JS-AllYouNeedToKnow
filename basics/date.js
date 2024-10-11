const date = new Date();

console.log(date.toString()) // to get date and time local in string
console.log(date.toLocaleString()) // to get local time and date in formatted value
console.log(date.toLocaleDateString()) // to get local date in formatted value
console.log(date.toLocaleTimeString()) // to get local time in formatted value

console.log(date.getTimezoneOffset()) // get local timezone offset
console.log(date.toISOString()) // get ISO time in string
console.log(date.getTime()) // get time from the time value
console.log(date.getDay()) // get day number of the week
console.log(date.getDate()) // get exact date
console.log(date.getMonth()) // get the current month , it will return the value from 0 index
console.log(date.getFullYear()) // get current year

console.log(date.getHours()) // get hour from current time
console.log(date.getMinutes()) // get minutes from current time
console.log(date.getSeconds()) // get seconds from current time
