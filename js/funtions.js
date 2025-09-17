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

function nameFunction(a, b) { // det som finns innanför parantesen kallas för parametrar som är beredda att ta emot information till funktionen.
    const sum = a + b //Deklarerar variabeln 
    console.log(sum) // Printar resultaten av variabel a + b
    return sum
}

const sum = nameFunction(10, 5) //Variabeln sparar resultat av sum. "Du får kakan efter du har bakat i en låda"