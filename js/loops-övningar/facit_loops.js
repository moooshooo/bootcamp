/*
FACIT - JAVASCRIPT ÖVNINGAR: GRUNDLÄGGANDE LOOPAR
==================================================

Detta är lösningarna till övningarna i övningar_loops.js
Jämför dina svar med dessa lösningar!

Dessa lösningar använder endast: for...of, while, forEach, funktioner, objekt, arrayer och if-satser.
*/

console.log("=== FACIT - GRUNDLÄGGANDE LOOPAR ===\n");

/*
ÖVNING 1: FOR...OF LOOPAR MED ARRAYER
=====================================
*/

console.log("1. FOR...OF LOOPAR MED ARRAYER");
console.log("------------------------------");

const colors = ["röd", "blå", "grön", "gul", "lila"];

// 1a) For...of loop för att skriva ut varje färg
console.log("1a) Alla färger:");
for (const color of colors) {
    console.log(color);
}

// 1b) Räkna färger som innehåller "ö"
console.log("\n1b) Färger som innehåller 'ö':");
let colorCount = 0;
for (const color of colors) {
    if (color.includes("ö")) {
        console.log(color);
        colorCount++;
    }
}
console.log(`Antal: ${colorCount}`);

// 1c) Färger med stora bokstäver
console.log("\n1c) Färger med stora bokstäver:");
for (const color of colors) {
    console.log(color.toUpperCase());
}

console.log("\n");

/*
ÖVNING 2: WHILE-LOOPAR
======================
*/

console.log("2. WHILE-LOOPAR");
console.log("---------------");

// 2a) While-loop som räknar från 1 till 5
console.log("2a) Räkna 1 till 5:");
let counter = 1;
while (counter <= 5) {
    console.log(counter);
    counter++;
}

// 2b) While-loop för att gå igenom array och räkna element
console.log("\n2b) Räkna element i fruits-array:");
const fruits = ["äpple", "banan", "orange", "kiwi", "mango"];
let index = 0;
let fruitCount = 0;
while (index < fruits.length) {
    console.log(`Element ${index + 1}: ${fruits[index]}`);
    fruitCount++;
    index++;
}
console.log(`Totalt antal frukter: ${fruitCount}`);

// 2c) While-loop som dubblar nummer tills det blir större än 100
console.log("\n2c) Dubbla nummer tills > 100:");
let number = 2;
while (number <= 100) {
    console.log(number);
    number *= 2;
}

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

// 3a) forEach för att skriva ut namn och ålder
console.log("3a) Studenternas åldrar:");
studentsInfo.forEach(student => {
    console.log(`${student.name} är ${student.age} år gammal`);
});

// 3b) Skapa e-postadresser
console.log("\n3b) E-postadresser:");
const emailAddresses = [];
studentsInfo.forEach(student => {
    const email = student.name.toLowerCase() + "@skolan.se";
    emailAddresses.push(email);
});
console.log(emailAddresses);

// 3c) Räkna studenter som bor i Stockholm
console.log("\n3c) Studenter som bor i Stockholm:");
let stockholmCount = 0;
studentsInfo.forEach(student => {
    if (student.city === "Stockholm") {
        stockholmCount++;
        console.log(student.name);
    }
});
console.log(`Antal: ${stockholmCount}`);

console.log("\n");

/*
ÖVNING 4: SKAPA NYA ARRAYER MED FOR...OF
========================================
*/

console.log("4. SKAPA NYA ARRAYER MED FOR...OF");
console.log("----------------------------------");

const prices = [100, 250, 399, 50, 799];

// 4a) Skapa array med priser + 25% moms
console.log("4a) Priser med 25% moms:");
const pricesWithTax = [];
for (const price of prices) {
    const priceWithTax = price * 1.25;
    pricesWithTax.push(priceWithTax);
}
console.log(pricesWithTax);

// 4b) Skapa array med endast studenternas namn
console.log("\n4b) Endast studenternas namn:");
const studentNames = [];
for (const student of studentsInfo) {
    studentNames.push(student.name);
}
console.log(studentNames);

// 4c) Skapa användarnamn
console.log("\n4c) Användarnamn med påhittade efternamn:");
const studentUsernames = [];
const lastNames = ["svensson", "andersson", "karlsson", "johansson"];
for (let i = 0; i < studentsInfo.length; i++) {
    const student = studentsInfo[i];
    const username = student.name.toLowerCase() + "_" + lastNames[i];
    studentUsernames.push(username);
}
console.log(studentUsernames);

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

// 5a) Hitta produkter som kostar mindre än 1000 kr
console.log("5a) Produkter under 1000 kr:");
const cheapProducts = [];
for (const product of products) {
    if (product.price < 1000) {
        cheapProducts.push(product);
    }
}
console.log(cheapProducts);

// 5b) Räkna elektronikprodukter i lager
console.log("\n5b) Antal elektronikprodukter i lager:");
let electronicsInStock = 0;
for (const product of products) {
    if (product.category === "elektronik" && product.inStock === true) {
        electronicsInStock++;
        console.log(product.name);
    }
}
console.log(`Antal: ${electronicsInStock}`);

// 5c) Skapa array med namn på produkter i lager
console.log("\n5c) Produkter som finns i lager:");
const availableProductNames = [];
for (const product of products) {
    if (product.inStock === true) {
        availableProductNames.push(product.name);
    }
}
console.log(availableProductNames);

console.log("\n");

/*
ÖVNING 6: FUNKTIONER OCH LOOPAR
===============================
*/

console.log("6. FUNKTIONER OCH LOOPAR");
console.log("-------------------------");

// 6a) Funktion som hittar första produkten över 10000 kr
function findExpensiveProduct(productArray) {
    for (const product of productArray) {
        if (product.price > 10000) {
            return product;
        }
    }
    return null; // Om ingen produkt hittas
}

console.log("6a) Första produkten över 10000 kr:");
console.log(findExpensiveProduct(products));

// 6b) Funktion som kontrollerar om det finns böcker
function hasBooks(productArray) {
    for (const product of productArray) {
        if (product.category === "böcker") {
            return true;
        }
    }
    return false;
}

console.log("\n6b) Finns det böcker?");
console.log(hasBooks(products));

// 6c) Funktion som räknar produkter i lager
function countProductsInStock(productArray) {
    let count = 0;
    for (const product of productArray) {
        if (product.inStock === true) {
            count++;
        }
    }
    return count;
}

console.log("\n6c) Antal produkter i lager:");
console.log(countProductsInStock(products));

console.log("\n");

/*
ÖVNING 7: BERÄKNINGAR MED LOOPAR
================================
*/

console.log("7. BERÄKNINGAR MED LOOPAR");
console.log("--------------------------");

const numbers = [5, 10, 15, 20, 25];

// 7a) Summa av alla nummer
console.log("7a) Summa av alla nummer:");
let sum = 0;
for (const number of numbers) {
    sum += number;
}
console.log(sum);

// 7b) Hitta största numret
console.log("\n7b) Största numret:");
let largest = 0;
for (const number of numbers) {
    if (number > largest) {
        largest = number;
    }
}
console.log(largest);

// 7c) Totala värdet av alla produkter
console.log("\n7c) Totala värdet av alla produkter:");
let totalValue = 0;
products.forEach(product => {
    totalValue += product.price;
});
console.log(`${totalValue} kr`);

// 7d) Funktion som räknar medelpris
function calculateAveragePrice(productArray) {
    let total = 0;
    let count = 0;
    for (const product of productArray) {
        total += product.price;
        count++;
    }
    return total / count;
}

console.log("\n7d) Medelpris för alla produkter:");
console.log(`${calculateAveragePrice(products).toFixed(2)} kr`);

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
console.log("8a) E-postadresser för alla anställda:");
const companyEmails = [];
for (const employee of employees) {
    const email = employee.firstName.toLowerCase() + "." + employee.lastName.toLowerCase() + "@företaget.se";
    companyEmails.push(email);
}
console.log(companyEmails);

// 8b) Skapa användarnamn för IT-anställda
console.log("\n8b) Användarnamn för IT-anställda:");
const itUsernames = [];
for (const employee of employees) {
    if (employee.department === "IT") {
        const username = employee.firstName.toLowerCase() + employee.lastName.charAt(0).toLowerCase();
        itUsernames.push(username);
    }
}
console.log(itUsernames);

// 8c) Välkomstmeddelanden
console.log("\n8c) Välkomstmeddelanden:");
function createWelcomeMessage(employee) {
    return `Välkommen ${employee.firstName} ${employee.lastName} från ${employee.department}-avdelningen!`;
}

employees.forEach(employee => {
    const message = createWelcomeMessage(employee);
    console.log(message);
});

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

// 9a) Skapa e-postadresser för alla elever
console.log("9a) E-postadresser för alla elever:");
const allStudentEmails = [];
for (const schoolClass of schoolClasses) {
    for (const student of schoolClass.students) {
        const email = student.name.toLowerCase() + "." + schoolClass.className.toLowerCase() + "@grundskolan.se";
        allStudentEmails.push(email);
    }
}
console.log(allStudentEmails);

// 9b) Räkna totala antalet elever
console.log("\n9b) Totalt antal elever:");
let totalStudents = 0;
for (const schoolClass of schoolClasses) {
    for (const student of schoolClass.students) {
        totalStudents++;
    }
}
console.log(totalStudents);

// 9c) Hitta elever med betyg över 90
console.log("\n9c) Elever med betyg över 90:");
const topStudents = [];
for (const schoolClass of schoolClasses) {
    for (const student of schoolClass.students) {
        if (student.grade > 90) {
            topStudents.push(student);
        }
    }
}
console.log(topStudents);

// 9d) Skapa klassrapporter
console.log("\n9d) Klassrapporter:");
function createClassReport(classObj) {
    let totalGrades = 0;
    let studentCount = 0;
    
    for (const student of classObj.students) {
        totalGrades += student.grade;
        studentCount++;
    }
    
    const averageGrade = totalGrades / studentCount;
    return `Klass ${classObj.className} har ${studentCount} elever med medelbetyg ${averageGrade.toFixed(1)}`;
}

for (const schoolClass of schoolClasses) {
    const report = createClassReport(schoolClass);
    console.log(report);
}

console.log("\n");

/*
ÖVNING 10: PRAKTISKA ÖVNINGAR MED LOOPAR
========================================
*/

console.log("10. PRAKTISKA ÖVNINGAR MED LOOPAR");
console.log("----------------------------------");

// 10a) Skapa lösenord för studenter
console.log("10a) Lösenord för studenter:");
const studentPasswords = [];
for (const student of studentsInfo) {
    const birthYear = 2024 - student.age;
    const password = student.name.toLowerCase() + birthYear;
    studentPasswords.push(password);
}
console.log(studentPasswords);

// 10b) Skapa telefonnummer för anställda
console.log("\n10b) Telefonnummer för anställda:");
const phoneNumbers = [];
for (const employee of employees) {
    let randomNumbers = "";
    for (let i = 0; i < 4; i++) {
        randomNumbers += Math.floor(Math.random() * 10);
    }
    const phoneNumber = employee.lastName.toLowerCase() + randomNumbers;
    phoneNumbers.push(phoneNumber);
}
console.log(phoneNumbers);

// 10c) Validera e-postadresser
console.log("\n10c) Validera e-postadresser:");
function isValidEmail(email) {
    if (email.includes("@") && email.includes(".se")) {
        return true;
    }
    return false;
}

const testEmails = ["anna@skolan.se", "erik.fel", "lisa@skolan.com", "omar@skolan.se"];
for (const email of testEmails) {
    const isValid = isValidEmail(email);
    console.log(`${email}: ${isValid ? "Giltig" : "Inte giltig"}`);
}

console.log("\n=== ALLA LÖSNINGAR KLARA! ===");
console.log("Bra jobbat! Du har nu övat på grundläggande loopar och funktioner!");
console.log("Dessa övningar använde endast: for...of, while, forEach, funktioner, objekt, arrayer och if-satser.");