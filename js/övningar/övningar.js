/*
JAVASCRIPT ÖVNINGAR - VILLKOR OCH OBJEKT
========================================

Dessa övningar fokuserar på if-satser, villkor och objekt.
Skriv din kod under varje uppgift och testa genom att köra filen med `node övningar.js`

Tips: Använd console.log() för att skriva ut resultat och kontrollera dina svar.
Kör sedan `node facit.js` för att validera dina svar!
*/

console.log("=== JAVASCRIPT ÖVNINGAR - VILLKOR OCH OBJEKT ===\n");

/*
ÖVNING 1: ANVÄNDARSYSTEM
========================
*/

console.log("1. ANVÄNDARSYSTEM");
console.log("-----------------");

// 1a) Skapa ett användare-objekt med följande egenskaper:
//     - namn: "Anna Svensson"
//     - ålder: 17
//     - harKörkort: false
//     - medlem: true
//     - poäng: 250
// Skriv din kod här:


// 1b) Skriv en if-sats som kollar om användaren är myndig (18+ år)
//     Om ja: "Du är myndig"
//     Om nej: "Du är minderårig"
// Skriv din kod här:


// 1c) Skriv en if-sats som kollar om användaren både är medlem OCH har över 200 poäng
//     Om ja: "VIP-status aktiverad!"
//     Om nej: "Standard användare"
// Skriv din kod här:


// 1d) Skriv en if-sats som kollar om användaren antingen har körkort ELLER är över 21 år
//     Om ja: "Kan hyra bil"
//     Om nej: "Kan inte hyra bil"
// Skriv din kod här:


console.log("\n");

/*
ÖVNING 2: KURSSYSTEM
===================
*/

console.log("2. KURSSYSTEM");
console.log("-------------");

// 2a) Skapa ett kurs-objekt med följande egenskaper:
//     - titel: "JavaScript Grundkurs"
//     - svårighetsgrad: "Nybörjare"
//     - pris: 500
//     - varaktighet: 8 (veckor)
//     - tillgänglig: true
// Skriv din kod här:


// 2b) Skapa ett student-objekt med följande egenskaper:
//     - namn: "Erik Johansson"
//     - erfarenhet: "Nybörjare"
//     - budget: 600
//     - harTid: false
// Skriv din kod här:


// 2c) Skriv en if-sats som kollar om studenten har råd med kursen (budget >= pris)
//     Om ja: "Du har råd med kursen"
//     Om nej: "Kursen är för dyr"
// Skriv din kod här:


// 2d) Skriv en if-sats som kollar om studenten kan gå kursen:
//     Krav: har råd OCH har tid OCH kursen är tillgänglig OCH studentens erfarenhet matchar kursens svårighetsgrad
//     Om ja: "Du kan anmäla dig till kursen!"
//     Om nej: "Du uppfyller inte alla krav"
// Skriv din kod här:


console.log("\n");

/*
ÖVNING 3: RESTAURANGBESTÄLLNING
==============================
*/

console.log("3. RESTAURANGBESTÄLLNING");
console.log("------------------------");

// 3a) Skapa ett beställning-objekt med följande egenskaper:
//     - kundnamn: "Maria Larsson"
//     - totalbelopp: 0
//     - harRabattkod: true
//     - leveransadress: null
//     - betalningsmetod: "kort"
// Skriv din kod här:
const order = {
    name: "Maria Larsson",
    totalbelopp: 0,
    harRabattkod: true,
    deliveryAdress: null,
    paymentMethod: "kort"
}
console.log(order);

// 3b) Skriv en if-sats som kollar om totalbeloppet är 0 (falsy)
//     Om ja: "Kundvagnen är tom"
//     Om nej: "Beställning klar för betalning"
// Skriv din kod här:
if (order.totalbelopp === 0){
    console.log("kundvagnen är tom")
} else {
    console.log("Inte tom")
}
// 3c) Skriv en if-sats som kollar om leveransadress är null
//     Om ja: "Hämtning i butik"
//     Om nej: "Hemleverans"
// Skriv din kod här:
if (order.deliveryAdress === null){
    console.log("Hämtning i butik")
} else {
    console.log("Hemleverans")
}
// 3d) Skriv en komplex if-sats som kollar:
//     Om totalbelopp > 0 OCH (betalningsmetod === "kort" ELLER betalningsmetod === "swish")
//     Om ja: "Betalning godkänd"
//     Om nej: "Ogiltig betalningsmetod eller tom kundvagn"
// Skriv din kod här:
if (order.totalbelopp > 0 && (order.paymentMethod ==="kort" || order.paymentMethod ==="swish")) {
console.log("Betalning G")
} else {
    console.log("Ogiltig betalningsmetod eller tom kundvagn")
}


console.log("\n");

/*
ÖVNING 4: UTMANINGSÖVNING - BANKKONTO
====================================
*/

console.log("4. UTMANINGSÖVNING - BANKKONTO");
console.log("------------------------------");

// 4a) Skapa ett bankkonto-objekt med följande egenskaper:
//     - kontoinnehavare: "David Nilsson"
//     - saldo: 5000
//     - kontotyp: "sparkonto"
//     - aktiv: true
//     - kreditgräns: 2000
// Skriv din kod här:
const bankAcc = {
    accHolder: "David Nilsson",
    accBalance: 900,
    accTyp: "sparkonto",
    active: true,
    creditLimit: 2000,
}
/* console.log(bankAcc) */

// 4b) Skapa en uttag-variabel med värdet 6000
//     Skriv en if-sats som kollar om uttaget är möjligt:
//     Villkor: kontot är aktivt OCH (saldo + kreditgräns) >= uttag
//     Om ja: "Uttag godkänt"
//     Om nej: "Uttag nekad - otillräckliga medel eller inaktivt konto"
// Skriv din kod här:
const checkOut = 6000
if (bankAcc.active && checkOut <= bankAcc.accBalance + bankAcc.creditLimit) {
console.log("Uttag godkänd")
} else {
console.log("Uttag ej godkänd")
}
// 4c) Skriv en if-sats som avgör kontoavgift baserat på kontotyp och saldo:
//     - Om sparkonto OCH saldo < 1000: "Avgift 50 kr"
//     - Om sparkonto OCH saldo >= 1000: "Ingen avgift"
//     - Om kontotyp !== "sparkonto": v
// Skriv din kod här:

console.log("4.c");
if (bankAcc.accTyp === "sparkonto" && bankAcc.accBalance <= 1000) {
    console.log("Avgift 50 kr")
} else if (bankAcc.accTyp === "sparkonto" && bankAcc.accBalance >= 1000) {
    console.log("Ingen avgift")
} else if (bankAcc.accTyp !== "sparkonto"){
    console.log("Kontakta banken för avgiftsinformation")
} else {
    console.log("Sket sig")
}

// 4d) Skriv en if-sats som kollar om kunden kan få lån:
//     Krav: saldo > 10000 ELLER (saldo > 5000 OCH kontotyp === "lönekonto")
//     Om ja: "Du är kvalificerad för lån"
//     Om nej: "Du är inte kvalificerad för lån just nu"
// Skriv din kod här:
if (bankAcc.accBalance > 10000 || (bankAcc.accBalance > 5000 && bankAcc.accTyp === "lönekonto")) {
    console.log("Du är kvalificerad för lån");
} else {
    console.log("Fråga mamma om lån!")
}

console.log("\n=== ÖVNINGAR KLARA! ===");
console.log("Kör nu 'node facit.js' för att kontrollera dina svar!");
