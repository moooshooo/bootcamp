/*
JAVASCRIPT ÖVNINGAR - GRUNDLÄGGANDE LOOPAR
==========================================

Dessa övningar fokuserar på for...of loopar, while-loopar, forEach och grundläggande programmering.
Använd endast: for...of, while, forEach, funktioner, objekt, arrayer och if-satser.
Skriv din kod under varje uppgift och testa genom att köra filen med `node övningar_loops.js`

Tips: Använd console.log() för att skriva ut resultat och kontrollera dina svar.
*/

console.log("=== JAVASCRIPT ÖVNINGAR - GRUNDLÄGGANDE LOOPAR ===\n");

/*
ÖVNING 1: FOR...OF LOOPAR MED ARRAYER
=====================================
*/

console.log("1. FOR...OF LOOPAR MED ARRAYER");
console.log("------------------------------");

// 1a) Använd en for...of loop för att skriva ut varje färg i denna array:
const colors = ["röd", "blå", "grön", "gul", "lila"];
// Skriv din kod här:


// 1b) Använd en for...of loop för att räkna hur många färger som innehåller bokstaven "ö"
// Skriv din kod här:


// 1c) Använd en for...of loop för att skriva ut färgerna med stora bokstäver
// Tips: Använd .toUpperCase()
// Skriv din kod här:


console.log("\n");

/*
ÖVNING 2: WHILE-LOOPAR
======================
*/

console.log("2. WHILE-LOOPAR");
console.log("---------------");

// 2a) Skriv en while-loop som räknar från 1 till 5 och skriver ut varje nummer
// Skriv din kod här:


// 2b) Använd en while-loop för att gå igenom denna array och räkna antalet element
const fruits = ["äpple", "banan", "orange", "kiwi", "mango"];
let index = 0;
// Skriv din kod här med while-loop:


// 2c) Skriv en while-loop som dubblar ett nummer tills det blir större än 100
//     Starta med nummer 2
// Skriv din kod här:


console.log("\n");

/*
ÖVNING 3: ARRAY FOREACH OCH OBJEKT
==================================
*/

console.log("3. ARRAY FOREACH OCH OBJEKT");
console.log("---------------------------");

const studentsInfo = [
    { name: "Anna", age: 20, city: "Stockholm" },
    { name: "Erik", age: 22, city: "Göteborg" },
    { name: "Lisa", age: 19, city: "Malmö" },
    { name: "Omar", age: 21, city: "Uppsala" }
];

// 3a) Använd forEach för att skriva ut varje students namn och ålder
// Format: "Anna är 20 år gammal"
// Skriv din kod här:


// 3b) Skapa en ny tom array som heter "emailAddresses"
// Använd sedan forEach för att generera e-postadresser för varje student
// Format: namn@skolan.se (t.ex. "anna@skolan.se")
// Tips: Använd .toLowerCase() för namnet
const emailAddresses = [];
// Skriv din kod här:


// 3c) Använd forEach för att räkna hur många studenter som bor i Stockholm
// Skriv din kod här:


console.log("\n");

/*
ÖVNING 4: SKAPA NYA ARRAYER MED FOR...OF
========================================
*/

console.log("4. SKAPA NYA ARRAYER MED FOR...OF");
console.log("----------------------------------");

const prices = [100, 250, 399, 50, 799];

// 4a) Skapa en ny array med alla priser + 25% moms
// Använd for...of loop för att gå igenom prices och skapa en ny array
const pricesWithTax = [];
// Skriv din kod här:


// 4b) Skapa en array med endast studenternas namn (från studentsInfo-arrayen ovan)
// Använd for...of loop
const studentNames = [];
// Skriv din kod här:


// 4c) Skapa en array med användarnamn för varje student
// Format: förnamn + efternamn (t.ex. "anna_svensson")
// Tips: Lägg till ett påhittat efternamn för varje student
const studentUsernames = [];
// Skriv din kod här:


console.log("\n");

/*
ÖVNING 5: HITTA ELEMENT MED IF-SATSER OCH LOOPAR
===============================================
*/

console.log("5. HITTA ELEMENT MED IF-SATSER OCH LOOPAR");
console.log("------------------------------------------");

const products = [
    { name: "iPhone", price: 12000, category: "elektronik", inStock: true },
    { name: "T-shirt", price: 299, category: "kläder", inStock: false },
    { name: "Laptop", price: 8999, category: "elektronik", inStock: true },
    { name: "Bok", price: 149, category: "böcker", inStock: true },
    { name: "Jeans", price: 599, category: "kläder", inStock: true }
];

// 5a) Hitta alla produkter som kostar mindre än 1000 kr
// Använd for...of loop och if-sats, skapa en ny array
const cheapProducts = [];
// Skriv din kod här:


// 5b) Räkna hur många elektronikprodukter som finns i lager
// Använd for...of loop och if-sats
let electronicsInStock = 0;
// Skriv din kod här:


// 5c) Skapa en array med namn på alla produkter som ÄR i lager
// Använd for...of loop och if-sats
const availableProductNames = [];
// Skriv din kod här:


console.log("\n");

/*
ÖVNING 6: FUNKTIONER OCH LOOPAR
===============================
*/

console.log("6. FUNKTIONER OCH LOOPAR");
console.log("-------------------------");

// 6a) Skriv en funktion som tar en array av produkter och returnerar den första produkten som kostar mer än 10000 kr
// Använd for...of loop och if-sats
function findExpensiveProduct(productArray) {
    // Skriv din kod här:
    
}
// Testa funktionen:
// console.log(findExpensiveProduct(products));


// 6b) Skriv en funktion som kontrollerar om det finns någon bok i produktlistan
// Returnera true eller false
function hasBooks(productArray) {
    // Skriv din kod här:
    
}
// Testa funktionen:
// console.log(hasBooks(products));


// 6c) Skriv en funktion som räknar totala antalet produkter i lager
function countProductsInStock(productArray) {
    // Skriv din kod här:
    
}
// Testa funktionen:
// console.log(countProductsInStock(products));


console.log("\n");

/*
ÖVNING 7: BERÄKNINGAR MED LOOPAR
================================
*/

console.log("7. BERÄKNINGAR MED LOOPAR");
console.log("--------------------------");

const numbers = [5, 10, 15, 20, 25];

// 7a) Räkna ut summan av alla nummer med for...of loop
let sum = 0;
// Skriv din kod här:


// 7b) Hitta det största numret med for...of loop
let largest = 0;
// Skriv din kod här:


// 7c) Räkna ut totala värdet av alla produkter med forEach
let totalValue = 0;
// Skriv din kod här:


// 7d) Skapa en funktion som räknar ut medelpriset för alla produkter
function calculateAveragePrice(productArray) {
    // Skriv din kod här med for...of loop:
    
}
// Testa funktionen:
// console.log(calculateAveragePrice(products));


console.log("\n");

/*
ÖVNING 8: KOMBINERA LOOPAR OCH FUNKTIONER - E-POST ÖVNINGAR
===========================================================
*/

console.log("8. KOMBINERA LOOPAR OCH FUNKTIONER - E-POST ÖVNINGAR");
console.log("------------------------------------------------------");

const employees = [
    { firstName: "Anna", lastName: "Andersson", department: "IT", startYear: 2020 },
    { firstName: "Erik", lastName: "Eriksson", department: "HR", startYear: 2018 },
    { firstName: "Lisa", lastName: "Lindberg", department: "IT", startYear: 2022 },
    { firstName: "Omar", lastName: "Ohlsson", department: "Marketing", startYear: 2019 }
];

// 8a) Skapa e-postadresser för alla anställda
// Format: förnamn.efternamn@företaget.se (t.ex. "anna.andersson@företaget.se")
// Använd toLowerCase() för att göra allt till små bokstäver
const companyEmails = [];
// Skriv din kod här:


// 8b) Skapa användarnamn för alla IT-anställda
// Format: förnamn + första bokstaven i efternamnet (t.ex. "annaa")
// Använd endast for...of loop och if-sats
const itUsernames = [];
// Skriv din kod här:


// 8c) Skriv en funktion som skapar en välkomsttext för varje anställd
// Format: "Välkommen Anna Andersson från IT-avdelningen!"
function createWelcomeMessage(employee) {
    // Skriv din kod här:
    
}

// Använd forEach för att skriva ut välkomstmeddelanden för alla anställda
// Skriv din kod här:


console.log("\n");

/*
ÖVNING 9: UTMANINGSÖVNING - SKOLSYSTEM
======================================
*/

console.log("9. UTMANINGSÖVNING - SKOLSYSTEM");
console.log("-------------------------------");

const schoolClasses = [
    { 
        className: "7A", 
        students: [
            { name: "Emma", grade: 85, subject: "Matematik" },
            { name: "Hugo", grade: 92, subject: "Matematik" },
            { name: "Saga", grade: 78, subject: "Matematik" }
        ]
    },
    { 
        className: "7B", 
        students: [
            { name: "Liam", grade: 88, subject: "Matematik" },
            { name: "Nova", grade: 95, subject: "Matematik" },
            { name: "Elias", grade: 82, subject: "Matematik" }
        ]
    }
];

// 9a) Skapa e-postadresser för alla elever i alla klasser
// Format: namn.klass@grundskolan.se (t.ex. "emma.7a@grundskolan.se")
const allStudentEmails = [];
// Tips: Du behöver loopar inom loopar (nested loops)
// Skriv din kod här:


// 9b) Räkna totala antalet elever i alla klasser
let totalStudents = 0;
// Skriv din kod här:


// 9c) Hitta alla elever som har betyg över 90 i alla klasser
const topStudents = [];
// Skriv din kod här:


// 9d) Skriv en funktion som skapar en klassrapport
// Format: "Klass 7A har 3 elever med medelbetyg 85.0"
function createClassReport(classObj) {
    // Skriv din kod här:
    
}

// Använd for...of för att skriva ut rapporter för alla klasser
// Skriv din kod här:

console.log("\n");

/*
ÖVNING 10: PRAKTISKA ÖVNINGAR MED LOOPAR
========================================
*/

console.log("10. PRAKTISKA ÖVNINGAR MED LOOPAR");
console.log("----------------------------------");

// 10a) Skapa lösenord för alla studenter (från övning 3)
// Format: förnamn + födelseår (t.ex. "anna2004")
// Använd for...of loop, födelseåret ska vara 2024 - ålder
const studentPasswords = [];
// Skriv din kod här:


// 10b) Skapa en telefonnummer-lista för alla anställda (från övning 8)
// Format: efternamn + 4 slumpmässiga siffror (t.ex. "andersson1234")
// Tips: Använd Math.floor(Math.random() * 10) för slumpmässiga siffror
const phoneNumbers = [];
// Skriv din kod här:


// 10c) Skriv en funktion som kontrollerar om en e-postadress är giltig
// En giltig e-post ska innehålla @ och .se
function isValidEmail(email) {
    // Skriv din kod här:
    
}

// Testa funktionen med några e-postadresser
const testEmails = ["anna@skolan.se", "erik.fel", "lisa@skolan.com", "omar@skolan.se"];
// Använd for...of för att testa alla e-postadresser
// Skriv din kod här:


console.log("\n=== ÖVNINGAR KLARA! ===");
console.log("Bra jobbat! Du har nu övat på for...of loopar, while loopar, forEach och funktioner!");
