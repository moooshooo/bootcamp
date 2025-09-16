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
const anv = {
    name: "Anna Svensson",
    age: 17,
    hasLicense: false,
    member: true,
    points: 200,
}
let ageText = " år"
console.log(anv.name + " " + "\n" + anv.age + ageText);
// 1b) Skriv en if-sats som kollar om användaren är myndig (18+ år)
//     Om ja: "Du är myndig"
//     Om nej: "Du är minderårig"
// Skriv din kod här:
if (anv.age >= 18) {
    console.log("Du är myndig")
} else {
    console.log("Du är mindreårig")
}
// 1c) Skriv en if-sats som kollar om användaren både är medlem OCH har över 200 poäng
//     Om ja: "VIP-status aktiverad!"
//     Om nej: "Standard användare"
// Skriv din kod här:
if (anv.member && anv.points >= 200) {
    console.log("VIP-status aktiverad!")
} else {
    console.log("Standard användare")
}
// 1d) Skriv en if-sats som kollar om användaren antingen har körkort ELLER är över 21 år
//     Om ja: "Kan hyra bil"
//     Om nej: "Kan inte hyra bil"
// Skriv din kod här:
if (anv.hasLicense || anv.age > 21) {
    console.log("Kan hyra bil")
} else {
    console.log("Kan INTE hyra bil")
}
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
const course = {
    titel: "Javascriot Grundkurs",
    difficulty: "Nybörjare",
    price: 500,
    length: 8,
    aviability: true 
}
const weeksText = " veckor"
/* console.log(course); */
// 2b) Skapa ett student-objekt med följande egenskaper:
//     - namn: "Erik Johansson"
//     - erfarenhet: "Nybörjare"
//     - budget: 600
//     - harTid: false
// Skriv din kod här:
const student = {
    name: "Erik Juanson",
    expirence: "Nybörjare",
    budget: 600,
    hasTime: false,
}
console.log(JSON.stringify(student, null, 3))
// 2c) Skriv en if-sats som kollar om studenten har råd med kursen (budget >= pris)
//     Om ja: "Du har råd med kursen"
//     Om nej: "Kursen är för dyr"
// Skriv din kod här:
if (student.budget >= course.price){
    console.log("Du har råd med kursen")
} else {
    console.log("Börja spara")
}


// 2d) Skriv en if-sats som kollar om studenten kan gå kursen:
//     Krav: har råd OCH har tid OCH kursen är tillgänglig OCH studentens erfarenhet matchar kursens svårighetsgrad
//     Om ja: "Du kan anmäla dig till kursen!"
//     Om nej: "Du uppfyller inte alla krav"
// Skriv din kod här:
if (student.budget >= course.price) && student.hasTime && (student.expirence == course.expirence)) {
    console.log("Välkommen")
} else {
    console.log("NOOOOOOoooooo la policia")
}

/* console.log("\n");
 */
/*
ÖVNING 3: RESTAURANGBESTÄLLNING
==============================
*/

/* console.log("3. RESTAURANGBESTÄLLNING");
console.log("------------------------");
 */
// 3a) Skapa ett beställning-objekt med följande egenskaper:
//     - kundnamn: "Maria Larsson"
//     - totalbelopp: 0
//     - harRabattkod: true
//     - leveransadress: null
//     - betalningsmetod: "kort"
// Skriv din kod här:


// 3b) Skriv en if-sats som kollar om totalbeloppet är 0 (falsy)
//     Om ja: "Kundvagnen är tom"
//     Om nej: "Beställning klar för betalning"
// Skriv din kod här:


// 3c) Skriv en if-sats som kollar om leveransadress är null
//     Om ja: "Hämtning i butik"
//     Om nej: "Hemleverans"
// Skriv din kod här:


// 3d) Skriv en komplex if-sats som kollar:
//     Om totalbelopp > 0 OCH (betalningsmetod === "kort" ELLER betalningsmetod === "swish")
//     Om ja: "Betalning godkänd"
//     Om nej: "Ogiltig betalningsmetod eller tom kundvagn"
// Skriv din kod här:


/* console.log("\n");
 */
/*
ÖVNING 4: UTMANINGSÖVNING - BANKKONTO
====================================
*/

/* console.log("4. UTMANINGSÖVNING - BANKKONTO");
console.log("------------------------------");
 */
// 4a) Skapa ett bankkonto-objekt med följande egenskaper:
//     - kontoinnehavare: "David Nilsson"
//     - saldo: 5000
//     - kontotyp: "sparkonto"
//     - aktiv: true
//     - kreditgräns: 2000
// Skriv din kod här:


// 4b) Skapa en uttag-variabel med värdet 6000
//     Skriv en if-sats som kollar om uttaget är möjligt:
//     Villkor: kontot är aktivt OCH (saldo + kreditgräns) >= uttag
//     Om ja: "Uttag godkänt"
//     Om nej: "Uttag nekad - otillräckliga medel eller inaktivt konto"
// Skriv din kod här:


// 4c) Skriv en if-sats som avgör kontoavgift baserat på kontotyp och saldo:
//     - Om sparkonto OCH saldo < 1000: "Avgift 50 kr"
//     - Om sparkonto OCH saldo >= 1000: "Ingen avgift"
//     - Om kontotyp !== "sparkonto": "Kontakta banken för avgiftsinformation"
// Skriv din kod här:


// 4d) Skriv en if-sats som kollar om kunden kan få lån:
//     Krav: saldo > 10000 ELLER (saldo > 5000 OCH kontotyp === "lönekonto")
//     Om ja: "Du är kvalificerad för lån"
//     Om nej: "Du är inte kvalificerad för lån just nu"
// Skriv din kod här:

/* 
console.log("\n=== ÖVNINGAR KLARA! ===");
console.log("Kör nu 'node facit.js' för att kontrollera dina svar!"); */
