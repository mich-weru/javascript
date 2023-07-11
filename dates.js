const D=new Date()
document.getElementById("todayDate").innerText=D.toDateString()
document.getElementById("year").innerText=D.getFullYear()
document.getElementById("month").innerText=D.getMonth()
let months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "august",
    "September",
    "October",
    "November",
    "December"
]
let m=months[D.getMonth()]
document.getElementById("monthName").innerText=m
document.getElementById("date").innerText=D.getDate()
document.getElementById("day").innerText=D.getDay()
let days=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"

]
let name=days[D.getDay()]
document.getElementById("dayName").innerText=name
document.getElementById("hours").innerText=D.getHours()
document.getElementById("minutes").innerText=D.getMinutes()
document.getElementById("seconds").innerText=D.getSeconds()
document.getElementById("msec").innerText=D.getMilliseconds()

let dateToday=D.getFullYear()+ ","+ " " + m +"," + " " +name + " "+ D.getHours() + ":" + D.getMinutes() + ":" +D.getSeconds()
document.getElementById("dateToday").innerText=dateToday