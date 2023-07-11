document.getElementById("firstname").innerText = "Michelle";
document.getElementById("secondname").innerText = "Njambi";
document.getElementById("lastname").innerText = "Weru";
document.getElementById("profile").src = "chicken.jpeg";
document.getElementById("firstname").style.color = "purple";
document.getElementById("secondname").style.color = "green";
document.getElementById("lastname").style.color = "blue";
document.getElementById("firstname").style.fontSize = "50px";
document.getElementById("secondname").style.fontSize = "60px";
document.getElementById("lastname").style.fontSize = "60px";
document.getElementById("profile").style.borderRadius = "50%";
document.getElementById("firstname").style.textDecoration = "underline"
document.getElementById("secondname").style.margin = "40px";
// document.getElementById("p").innerText = " I bet it's around 300 or 400. They'll probably exaggerate if it's shown in the manga/anime";

// using variables
let firstName = "Michelle"
let secondName = "Njambi"
let lastName = "Weru"

let fullName = firstName + " " + secondName + " " + lastName
document.getElementById("first").innerText = firstName
document.getElementById("second").innerText = secondName
document.getElementById("last").innerText = lastName
document.getElementById("full").innerText = fullName
document.getElementById("full").style.fontSize = "40px"
document.getElementById("full").style.color = "red"

let a = 20
console.log(a)
let b = 40
console.log(a + b)
console.log(a += 50)
let string1 = 10
let string2 = "sheep"
console.log(string1, string2)
console.log(string1 + " " + string2)
let number1 = 500
let number2 = "500"
console.log(number1 == number2)
console.log(number1 === number2)
let x = 10
let y = 20
// greater than  (>)
console.log(y > x)
console.log(x > y)
// less than (<)
console.log(x < y)
console.log(y < x)
// greater than or equal to(>=)
console.log(x >= y)
console.log(y >= x)
// less than or equal to(<=)
console.log(x <= y)
console.log(y <= x)

x = 300
y = 250
// AND (&&)
console.log(x > y && y <= x)
console.log(y > x && x >= y)
// OR (||)
console.log(x > y || y <= x)
console.log(y > x || x >= y)
console.log(x < y || y > x)



// DATA TYPES
// Boolean
// number
// undefined
// null
// bigint
// symbol
// object
// strings

let tablet = 4
let dosage = 2
console.log("i take", tablet, "tablet", dosage, "times a day")
tablet = 1
dosage = 3
console.log("i take", tablet, "tablet", dosage, "times a day")

let radius = 20
const PI = 3.142
console.log("the area of the circle is:", PI * radius * radius)
console.log("the circumference of a circle is:", PI * radius * 2)

const person = {
    age: 35,
    height: 1.5,
    name: "Nelly"
}
document.getElementById("person").innerText = "My name is " + " " + person.name + " " + "I am" + " " + person.age + "." + "I am"+ " " + person.height + " " + "meters tall"


