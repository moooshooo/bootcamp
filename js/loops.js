const schoolStudents = [
    {name: "Emilia", grade: 85, course: "PHP"},
    {name: "Sienna", grade: 95, course: "JavaScript"},
    {name: "Daruk", grade: 89, course: "UX"},
    {name: "Jennifer", grade: 54, course: "HR"},
]
/* .reverse() */
/* // Gör att du loopar åt andra hållet
schoolStudents.push({name: "Kalle", grade: 77, course: ".Net"})

for (const eachStudent of schoolStudents) {
//Körs för varje element i array students
//Börjar med den första index 0
    console.log(eachStudent.name)
} */

/* let eMail = []

for (const eachStudent of schoolStudents) {
    const studentsEmail = `${eachStudent.name.toLowerCase()}@chasacade.se`
    eMail.push(studentsEmail)
}
console.log(eMail) */

/* const wantFriends = (buddys) => 
buddys > 0
? console.log("Windows friendly")
: console.log("Linux friendly")

wantFriends(0) */

/* //While 
let count = 3
while (count > 0) {
    console.log("Hej!")
    count = count -1
} */

/* //Simulera 
//Startvärde
let currentYear = 0
let saldo = 5000
let interest = 5

while (currentYear < 10) {
    saldo = saldo * (1 + (interest/100))
    currentYear++
}

//String + number
console.log("Efter 10 år har ditt saldo växt till " , saldo)
console.log(`Efter 10 år har ditt saldo växt till ${saldo.toFixed(1)}`) */

/* //Avrundning
const roundUpSaldo = Math.round(saldo)
const roundDownSaldo = Math.floor(saldo)
console.log(roundUpSaldo,roundDownSaldo ) */

schoolStudents.forEach((eachStudent) => {
/* console.log(`Hej ${eachStudent.name} din betyg är ${eachStudent.grade}`) */

console.log(Object.keys(eachStudent)[0])

})

/* array.forEach(function(element, index, array) {
  // gör något med elementet
}); */