const person = {
    name: "Mosho",
    age: "43"
}

//const isAdult = true
const harDuFragatMamma = true
const hasTicket = false

//Boolensk uttryck


// Boolensk uttryck
const isAdult = person.age  >= 18 // Ger sant eller falsk

// Om du är större eller lika med 15 år och mindre än 18 år.
const inTeenager = person.age >= 15 && person.age < 18

/*
if (!isAdult) {
    //Kör den här koden om isAdult är sant
    console.log("Välkommen gubbe!")
} else if (!harDuFragatMamma) {
    console.log("Bra att du frågat mamma! men du är inte så gammal")
}else {
    console.log("Detta blev else satsen")
}
*/
/*
if (isAdult && (harDuFragatMamma || hasTicket)) {
    //Kör den här koden om isAdult är sant
    console.log("Välkommen gubbe! du uppfyller alla krav")
}else {
    console.log("Du uppfyller inte alla krav")
}
*/

/*
if (isAdult) {
    //Kör den här koden om isAdult är sant
    console.log("Välkommen gubbe!")
}
*/

/* 
if (!isAdult) {
    //Kör den här koden om isAdult är sant
    console.log("Du är inte så gammal!")
}
    */

// && = And
// || = Or