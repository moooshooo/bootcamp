const students = [
    {name: "Anna", grade: 85, course: "Javascript"},
    {name: "Maria", grade: 95, course: "UX"},
    {name: "Nora", grade: 95, course: "Devops"},
    {name: "Ahmad", grade: 100, course: "Retorik"},
]

students.push({name: "Kalle", grade: 20, course: '.NET'})

const myName = "Hej, jag heter Ahmad och jag tycker om att koda. Jag vaknade tidigt idag."

const newText = myName.replaceAll('jag', 'du') // Samma text som ovan, men där jag är ersatt av du.

const newName = myName.toUpperCase() // AHMAD

/*

namn@chasacademy.se

Skapa en lista med alla studenters e-postadresser.

*/

/*
let emails = []

for (const student of students) {
    // Köras en gång för varje element i arrayen
    // Börjar alltid med den första

    if (student.name === 'Maria') {
        break // Stoppar loopen
    }

    const studentEmail = `${student.name.toLowerCase()}@chasacademy.se`
    .replace('.se', '.com')
    .toLowerCase()

    emails.push(studentEmail)
}

console.log(emails)

*/

// const myFunction = (student) => {
//     console.log(`Hej ${student.name}`)
// }


function myFunction(student) {
    console.log(`Hej ${student.name}`)
}

students.forEach((student) => {
    console.log(`Hej ${student.name}`)
})

/*

forEach kräver en funktion, och den kommer att anropa våran funktion
en gång för varje element i arrayen. För varje element som den anropar våran
funktion med, så kommer den att skicka in det elementet som en parameter till
våran funktion.

*/








// Simulera ett bankkonto som växer med en avkastning på 5% årligen. Vad blir summan efter 10 år om vi gör en insättning på 5000kr.

// Startvärden
let currentYear = 0
let saldo = 5000
let interest = 5

while (currentYear < 10) {
    saldo = saldo * (1 + (interest/100))

    currentYear++
}

const roundedSaldo = Math.round(saldo)

const roundDownSaldo = Math.floor(saldo)

// console.log(saldo)

//console.log(`Efter 10 år har ditt saldo växt till: ${saldo.toFixed(1)}`)



