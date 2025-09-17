/* Author: Mos 
Date: 2025-09-17
Version: 0.1
 */
console.log("======== JS ========" + "Genomgång av funktioner - 2025-09-17"+"\n" )

/* function add(a, b) { // det som finns innanför parantesen kallas för parametrar som är beredda att ta emot information till funktionen.
    const result = a + b //Deklarerar variabeln 
    console.log(result) // Printar resultaten av variabel a + b
}
add(5, 10) // Du lägger till data i parametrarna.
add (2, 8) */

/* 
function nameFunction(a, b) { // det som finns innanför parantesen kallas för parametrar som är beredda att ta emot information till funktionen.
    const sum = a + b //Deklarerar variabeln 
    console.log(sum) // Printar resultaten av variabel a + b
    return sum
}
const sum = nameFunction(10, 5) //Variabeln sparar resultat av sum. "Du får kakan efter du har bakat i en låda"
 */


//Nytt sätt att skriva en funktion "Arrow functions" -- Vanligare och rekommenderad
// Sätt 1 - 
const greet1 = (mittNamn1) => {
    console.log(mittNamn1)
}
greet1("Mos")
// Sätt 2 - ger automatisk return i samma rad 
const greet2 = mittNamn2 => console.log(mittNamn2)
greet2("Som")

// Sätt 2 med return 
const summa = (a, b) => a - b // Du definierar en funktion och lagrar den i variabeln 'summa'
const way2 = summa(11, 3) // Du anropar funktionen med argumenten 11 och 3, resultatet sparas i 'way2'
console.log(way2) // Du skriver ut värdet i 'way2' (i detta fall 8)

// Sätt 3 - Ovanligt
const summa2 = function(a,b ) {
    return a - b
}

const ak47 = {
    type: "weapon",
    givenName: "Ak- 48 (Kala)",
    price: "2700",
    damage: 60,
    shoot: () => { // Du kan ha en funktion i en object
        console.log("pang") 
    }
}

ak47.shoot() // Anropas också. Använder du shoot kan du visa det i terminalen.