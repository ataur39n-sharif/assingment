
/* question answer - 1  */

let employeeName = []
fetch("https://api.b2gsoft.com/api/v1/interview/question/one")
    .then(res => res.json())
    .then(result => {
        const employeeData = Object.entries(result.data.content.component)
        employeeData.forEach((eachEmployee) => {
            employeeName.push(eachEmployee[1].employee)
        })

        console.log('output', employeeName);
    })


/* question answer - 2 */

const asia_Dhaka_utcOffset = 6 * 60
const america_costaRica_utcOffset = -6 * 60

//for asia/dhaka timezone
let date1 = new Date()
let localTime_utcOffset1 = date1.getTimezoneOffset()
date1.setMinutes(date1.getMinutes() + localTime_utcOffset1)
const asia_timeZone = date1.setMinutes(date1.getMinutes() + asia_Dhaka_utcOffset)
console.log('asia/dhaka timezone', date1);

//for America/costarica timezone
let date2 = new Date()
let localTime_utcOffset2 = date1.getTimezoneOffset()
date2.setMinutes(date2.getMinutes() + localTime_utcOffset2)
const america_costaRica_timeZone = date2.setMinutes(date2.getMinutes() + america_costaRica_utcOffset)
console.log('America/costarica timezone', date2);