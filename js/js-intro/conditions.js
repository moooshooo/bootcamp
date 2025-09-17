const person = {
    name: "Ahmad",
    age: 30 // number-type
}

const pinCode = 1234

const userInput = "1234"

if (userInput !== pinCode) {
    console.log("Fel kod har angetts, försök igen!")
}

if (person.name !== "Ahmad") {
    console.log("Hej någon annan")
}

// Vad är skillnaden mellan === och ==
// Eller !== och !=


/*

Jämför två värden utan hänsyn till typ. Alltså skulle siffran 30 och "30" vara lika även om de har olika typer.
== eller != 

Jämför två värden med hänsyn till typ. Alltså skulle siffran 30 och "30" inte vara lika även om de till synes innehåller samma siffra.
=== eller !==

*/

// Tre stycken innebär att vi jämför både värde och typ
// Två stycken jämför endast värden utan hänsyn till typ

// if (person.name === "Ahmad" && person.age != "15") {
//     console.log("Du är inte 30!")
// }


const hasTicket = false

const hasParentPermission = false

// Booleskt uttryck

const isAdult = person.age >= 18 // Uttryck som antingen är sant eller falskt

const isTeenager = person.age >= 15 && person.age < 18

// Om du är en vuxen eller om du har förälders medgivande och biljett

// if (isAdult && hasTicket) {
//     console.log("Välkommen in!")
// } else if (isTeenager && hasTicket && hasParentPermission) {
//     console.log("Välkommen in!")
// } else {
//     console.log("Ej välkommen")
// }

/*


&& betyder OCH / AND-operator. Betyder att båda måste vara sanna.
|| betyder ELLER / OR-operator. Betyder en av dem är sant.

*/

/*
if (isAdult && hasTicket) {
    console.log("Välkommen!")
}

if (isAdult) {

    // Kör den här koden om isAdult är sant
    console.log('Välkommen in!')

} else if (hasParentPermission) {
    console.log('Välkommen in!')
} else {
    console.log('Du måste tyvärr vara över 18 för att komma in på denna sajt.')
}




if (isAdult || hasParentPermission) {
    console.log('Välkommen in!')
} else {
    console.log('Du måste tyvärr vara över 18 för att komma in på denna sajt.')
}






// if (!isAdult) {
//     console.log('Du måste tyvärr vara över 18 för att komma in på denna sajt.')
// }


*/