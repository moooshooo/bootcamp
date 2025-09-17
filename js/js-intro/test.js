
// 1. Data
// 2. Behandlingen av data


/*

Kommentarsblock

*/

// Kommentar för en enskild rad

// Skapar en lokal variabel som vi kan ändra värdet på senare om vi vill.
let myName = "Ahmad"

// Skapar en lokal variabel som har ett konstant värde, d.v.s. vi kan ej ändra värdet senare.
const personalNumber = "123456"

// personalNumber = "00000" // Fel här, vi kan inte ändra värdet på personalNumber eftersom den är en konstant.

// String
const description = 'Hello there, this is a sample string value.'

// Number
const age = 30
const result = age / 2

// Boolean – Antingen true eller false

const isAdult = false

// Array – En lista av element/värden

const myHobbies = ["träna", "programmera", "spendera tid med familjen", "resa"] // string[]
const myFavouriteNumbers = [10, 15, 20, 25] // number[]
const myBools = [true, false, false, true, true] // boolean[]
const myLists = [["träna", "äta", "sova"], [10, 15, 20, 25]] // En lista av två listor
const myValues = ["test", 15, true] // Inte rekommenderat att blanda typer i en array.

// Objekt

const player1 = {
    name: "Ahmad",
    age: 30,
    hobbies: ['träna', 'äta', 'sova']
}

const order = {
    id: "order_nummer",
    total: 359,
    products: ['T-shirt', 'Bälte', 'Strumpor 2-pack'],
    paidAt: '2025-09-15',
    cashier: 'Sandra Lorén'
}

console.log(order.cashier)

const chokladBollar = {
    name: "Chokladbollar",
    ingredients: ['Havregryn', 'Kokos', 'Kakao'],
    time: 1,
}



// I Javascript kan vi tilldela ett värde av en viss typ, och sedan ändra värdet till en helt annan typ senare.
let myName2 = "Ahmad"
myName2 = 50

// Dynamiskt typade: Javascript, Python, Ruby – Inte strikt med typer
// Statiskt typade: C/C++, C#, Java – Strikt med typer



/* Några typer i JS

string – Fritext, deklareras med dubbla citat-tecken och värdet rymmer därimellan.
number – Naturliga tal, skrivs som de är utan citat. I andra språk kallas detta även för Integer.
boolean – Sant eller falskt värden, endast true eller false är giltiga värden.

*/




/* Konventioner för namngivning av funktioner och variabler.

snake_case – Används mestadels vid transport (nätverkskommunikation, apier) och lagring av data (databaser)

camelCase – Används mestadels inom Javascript

PascalCase – Används mestadels inom .NET eller Java

kebab-case – Mindre vanligt inom ren kod, används framförallt inom CSS klassnamn och URL.

*/



