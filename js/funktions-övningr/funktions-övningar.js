/*
JAVASCRIPT ÖVNINGAR - FUNKTIONER OCH VILLKOR
============================================

Dessa övningar kombinerar funktioner med if-satser och villkor.
Skriv din kod under varje uppgift och testa genom att köra filen med `node funktions-övningar.js`

Tips: 
- Använd console.log() för att skriva ut resultat och kontrollera dina svar.
- Du kan skriva funktioner på vilket sätt du vill (function, const =>, etc.)
- Kör sedan `node funktions-facit.js` för att validera dina svar!
*/

/* console.log("=== JAVASCRIPT ÖVNINGAR - FUNKTIONER OCH VILLKOR ===\n");
 */
/*
ÖVNING 1: ÅLDERSKONTROLL
========================
*/

/* console.log("1. ÅLDERSKONTROLL");
console.log("-----------------");
 */
// 1a) Skapa en funktion som heter "checkAge" som tar age som parameter
//     Funktionen ska returnera true om personen är myndig (18+), annars false
// Skriv din kod här:


 /*
 console.log("1a");
 
console.log("Min första svar");
const checkAge = (a) => {
    const age = a >= 18
    console.log(`Du är myndig, för att du är ${a} år gammal`)
    return age
}
checkAge(18)

console.log("-----------------");
console.log("Min andra svar");
const checkAgeB = ab =>  ageB = ab >= 18
console.log(checkAgeB(18))
console.log(checkAgeB(15)) */

// 1b) Skapa en funktion som heter "ageCategory" som tar age som parameter
//     Funktionen ska returnera en sträng baserat på ålder:
//     - Under 13: "Barn"
//     - 13-17: "Tonåring" 
//     - 18-64: "Vuxen"
//     - 65+: "Pensionär"
// Skriv din kod här:

/* console.log("1a");
const ageCategory = (age) => {
    if (age <= 12) {
        console.log(`Du är ett barn när du är ${age} år gammal`)
    } else if (age >= 13 && age <= 17) {
        console.log(`Bebis!!! När du är ${age} år gammal`)
    } else if (age >= 18 && age <= 65) {
        console.log(`Nu kan du gå o festa när du är ${age} år gammal`)
    } else {
        console.log(`Du borde hitta snart en kista när du är ${age} år gammal`)
    }
}
ageCategory(12) */

// 1c) Testa dina funktioner med följande åldrar och skriv ut resultatet:
//     - checkAge(16) och ageCategory(16)
//     - checkAge(25) och ageCategory(25)
//     - checkAge(70) och ageCategory(70)
// Skriv din kod här:
/* 
console.log("1c");

const ageCategory = (age) => {
    if (age <= 12) {
        return "Bebis"
    } else if (age >= 13 && age <= 17) {
        return "Ungdom"
    } else if (age >= 18 && age <= 65) {
        return "Vuxen o vild"
    } else {
        return "Kista"
    }
}

const checkAge = age2 => age2 >= 18; !important
 */
/* 
const resultat = checkAge */
/* console.log(ageCategory(6), checkAge(6))
 */
/* console.log("\n");
 */
/*
ÖVNING 2: BETYGSYSTEM
====================
*/
/* 
console.log("2. BETYGSYSTEM");
console.log("--------------");
 */
// 2a) Skapa en funktion "calculateGrade" som tar points (0-100) som parameter
//     Returnera bokstavsbetyg enligt:
//     - 90-100: "A"
//     - 80-89: "B" 
//     - 70-79: "C"
//     - 60-69: "D"
//     - Under 60: "F"
// Skriv din kod här:

/* const grade = 59
const calculateGrade = (points) => {
    if(points >= 90){
        return "A"
    } else if (points >= 80) {
        return "B"
    }else if (points >= 70) {
        return "C"
    }else if (points >= 60) {
        return "D"
    }else if (points < 60) {
        return "F"
    }
}
const resultGrade = calculateGrade(grade) */

// 2b) Skapa en funktion "isPassed" som tar points som parameter
//     Returnera true om betyget är godkänt (60+), annars false
// Skriv din kod här:

/* const isPassed = (points) => points >=60
const resultIsPassed = isPassed(grade) */

/* console.log(resultGrade, resultIsPassed) */

// 2c) Skapa en funktion "gradeMessage" som tar name och points som parametrar
//     Returnera en komplett mening, t.ex: "Anna fick betyget B och är godkänd"
//     Använd dina andra funktioner inuti denna funktion!
// Skriv din kod här:

//const gotPoints = 59
//const resultIsPassed = isPassed(grade)
/* 
const gradeMessage = (studentNamn,gotPoints) => {
    const calculateGrade = (gotPoints) => {
    if(gotPoints >= 90){
            return "A"
        } else if (gotPoints >= 80) {
            return "B"
        }else if (gotPoints >= 70) {
            return "C"
        }else if (gotPoints >= 60) {
            return "D"
        }else if (gotPoints < 60) {
            return "F"
        }
    }
    const isPassed = (gotPoints) => gotPoints >= 60
    const resultIsPassedText = isPassed(gotPoints) ? "godkänd" : "underkänd"
    return `${studentNamn} fick betyg ${calculateGrade(gotPoints)}, dvs ${gotPoints} poäng och är därmed ${resultIsPassedText}`
} */
/* 
const gradeMessage = (studentNamn,gotPoints) => {
const calculateGrade = (gotPoints) => {
if(gotPoints >= 90){
        return "A"
    } else if (gotPoints >= 80) {
        return "B"
    }else if (gotPoints >= 70) {
        return "C"
    }else if (gotPoints >= 60) {
        return "D"
    }else if (gotPoints < 60) {
        return "F"
    }
}
const isPassed = (gotPoints) => gotPoints >= 60
const resultIsPassedText = isPassed(gotPoints) ? "godkänd" : "underkänd"
return `${studentNamn} fick betyg ${calculateGrade(gotPoints)}, dvs ${gotPoints} poäng och är därmed ${resultIsPassedText}`
}

console.log(gradeMessage("Pelle",60))

console.log("test") */


/* const resultIsPassedText = resultIsPassed ? "godkänd" : "underkänd"
console.log(`Pelle fick betyg ${resultGrade} och är ${resultIsPassedText}`)
 */
// 2d) Testa funktionen gradeMessage med:
//     - gradeMessage("Erik", 85)
//     - gradeMessage("Sara", 45)
//     - gradeMessage("Lisa", 92)
// Skriv din kod här:

/* 
console.log("\n"); */

/*
ÖVNING 3: PRISBERÄKNING
======================
*/

console.log("3. PRISBERÄKNING");
console.log("----------------");

// 3a) Skapa en funktion "calculateDiscount" som tar price och discountCode som parametrar
//     Rabattkoder och deras rabatter:
//     - "STUDENT": 15% rabatt
//     - "SENIOR": 20% rabatt  
//     - "VIP": 25% rabatt
//     - Ogiltig kod: 0% rabatt
//     Returnera det nya priset efter rabatt
// Skriv din kod här:

const calculateDiscount = (discountCode, price) => {
    let discountAmount
    if (discountCode == "student") {
        discountAmount = 15
    } else if (discountCode == "senior") {
        discountAmount = 20
    } else if (discountCode == "VIP") {
        discountAmount = 25
    } else {
        discountAmount = 0
    }
    let discountPrice = price - (price * discountAmount/100)
    return discountPrice
}
/* 
console.log(calculateDiscount("VIP",375)) */

// 3b) Skapa en funktion "shippingCost" som tar price och deliveryCountry som parametrar
//     Regler:
//     - Om price >= 500: gratis frakt (returnera 0)
//     - Sverige: 50 kr frakt
//     - Norge/Danmark: 100 kr frakt  
//     - Övriga länder: 200 kr frakt
// Skriv din kod här:

const shippingCost = (price, deliveryCountry) => {
    if (price <= 500){
        return 0
    } else if (deliveryCountry == "Sverige") {
        return 50
    } else if (deliveryCountry == "Norge" || "Danmark") {
        return 100
    } else {return 200}
}
/* console.log(shippingCost(499,"Danmark")) */

// 3c) Skapa en funktion "totalCost" som tar price, discountCode och deliveryCountry som parametrar
//     Beräkna det totala priset med rabatt och frakt
//     Använd dina andra funktioner!
// Skriv din kod här:

const totalCost = (price, discountCode, deliveryCountry) => calculateDiscount(discountCode, price) + shippingCost(price, deliveryCountry)
/* 
console.log(`Priset för en student är ${totalCost(499, "student","Sverige")} `)
console.log(`Priset för en VIP är ${totalCost(499, "VIP","Norge")} `)
console.log(`Priset för en Invalid discount är ${totalCost(800, "rtdyfhjk","Finland")} `)
 */
// 3d) Testa totalCost med följande kombinationer:
//     - totalCost(600, "STUDENT", "Sverige")
//     - totalCost(300, "VIP", "Norge") 
//     - totalCost(800, "INVALID", "Finland")
// Skriv din kod här:


console.log("\n");

/*
ÖVNING 4: LÖNEBERÄKNING
======================
*/

console.log("4. LÖNEBERÄKNING");
console.log("----------------");

// 4a) Skapa en funktion "calculateTax" som tar grossSalary som parameter
//     Skatteregler:
//     - Under 20000: 0% skatt
//     - 20000-50000: 30% skatt
//     - Över 50000: 35% skatt  
//     Returnera skattebeloppet (inte nettolönen)
// Skriv din kod här:

const calculateTax = (grossSalary) => {
    if ( grossSalary < 20000) return 0
    else if (grossSalary >= 20000 && grossSalary < 50000) return 30
    else if (grossSalary > 50000) return 35
}
/* 
console.log(calculateTax(50001)) */

// 4b) Skapa en funktion "calculateNetSalary" som tar grossSalary som parameter
//     Använd calculateTax funktionen för att beräkna nettolön
// Skriv din kod här:

const calculateNetSalary = (grossSalary) => grossSalary - (grossSalary *(calculateTax(grossSalary)/100))

/* console.log(`Min skatt är ${calculateTax(20000)}% och efter lönen efter skatt är ${calculateNetSalary(20000)}kr`)
 */

// 4c) Skapa en funktion "salaryReport" som tar name och grossSalary som parametrar
//     Returnera en rapport som visar:
//     - Namn
//     - Bruttolön  
//     - Skatt
//     - Nettolön
//     Formatera som: "Erik: Brutto 45000 kr, Skatt 13500 kr, Netto 31500 kr"
// Skriv din kod här:

const salaryReport = (kons, grossSalary) => {
    console.log(`${kons}: Brutto ${grossSalary}, skatt i kr ${calculateTax(grossSalary)/100 * grossSalary}, Netto ${grossSalary - (calculateTax(grossSalary)/100 * grossSalary)} kr `)
}
// 4d) Testa salaryReport med:
//     - salaryReport("Maria", 35000)
//     - salaryReport("Johan", 15000)
//     - salaryReport("Anna", 60000)
// Skriv din kod här:
/* 
salaryReport("Maria", 35000)
salaryReport("Johan", 15000)
salaryReport("Anna", 60000)
 */
console.log("\n");

/*
ÖVNING 5: UTMANINGSÖVNING - SPELBETYG
====================================
*/

console.log("5. UTMANINGSÖVNING - SPELBETYG");
console.log("-------------------------------");

// 5a) Skapa en funktion "analyzeGame" som tar playerName, wins, losses och draws som parametrar
//     Beräkna:
//     - Totalt antal spel
//     - Vinstprocent (wins/totalt antal spel * 100)
//     - Spelkategori baserat på vinstprocent:
//       * 80%+: "Mästare"
//       * 60-79%: "Expert" 
//       * 40-59%: "Medel"
//       * 20-39%: "Nybörjare"
//       * Under 20%: "Träning behövs"
//     Returnera ett objekt med all information
// Skriv din kod här:

const analyzeGame = (playerName, wins, losses, draws) => {

    const totalGames = wins + losses + draws
    const winRate = (wins / totalGames) * 100
    const category = () => {
        if (winRate >= 80) {
            return "Mästare";
        } else if (winRate >= 60 && winRate <= 79) {
            return "Expert";
        } else if (winRate >= 40 && winRate <= 59) {
            return "Medel";
        } else if (winRate >= 20 && winRate <= 39) {
            return "Nybörjare";
        } else {
            return "Träning behövs";
        }
    }
 return {playerName, winRate, category: category(), totalGames}
 //console.log(` Spelare: ${playerName} \n Antal matcher: ${totalGames} \n Winrate: ${winRate}% \n Nivå: ${category()} \n`)
}
const Player1 = analyzeGame("Darun", 80,10,1)
const Player2 = analyzeGame("Nana", 50,10,1)
// 5b) Skapa en funktion "comparePlayers" som tar två playerObjects som parametrar
//     (använd resultat från analyzeGame)
//     Returnera vilken spelare som är bättre baserat på vinstprocent
//     Format: "Erik är bättre än Sara (75% vs 45%)"
// Skriv din kod här:

/* console.log(` ${Player2.playerName} är bättre än ${Player1.playerName} med ${Player2.winRate.toFixed(1)}% vs ${Player1.winRate.toFixed(1)}%`) */

const comparePlayers = () => {
    if(Player1.winRate > Player2.winRate){
        console.log(`${Player1.playerName} är bättre än ${Player2.playerName} med ${Player1.winRate.toFixed(1)}% vs ${Player2.winRate.toFixed(1)}%`)
    }else if (Player2.winRate > Player1.winRate) {
        console.log(`${Player2.playerName} är bättre än ${Player1.playerName} med ${Player2.winRate.toFixed(1)}% vs ${Player1.winRate.toFixed(1)}%`)
    } else {
        console.log("Funkar ej")
    }
}
/* 
comparePlayers() */

// 5c) Skapa en funktion "recommendation" som tar ett playerObject som parameter
//     Ge olika rekommendationer baserat på kategori:
//     - "Mästare": "Fortsätt dominera!"
//     - "Expert": "Snart mästarnivå!"
//     - "Medel": "Bra jobbat, fortsätt träna!"
//     - "Nybörjare": "Träna mer för att förbättras"
//     - "Träning behövs": "Fokusera på grunderna"
// Skriv din kod här:

const recommendation = () => {
    if(Player1.category == "Mästare"){
        "Fortsätt dominera!"
    }else if (Player1.category == "Expert"){
        "Snart mästarnivå!"
    }else if (Player1.category == "Medel"){
        "Bra jobbat, fortsätt träna!"
    }else if (Player1.category == "Nybörjare"){
        "Träna mer för att förbättras"
    }else {
        "Fokusera på grunderna"
    }
}
console.log(recommendation())
// 5d) Testa med följande spelare:
//     - Erik: 80 wins, 15 losses, 5 draws
//     - Sara: 30 wins, 40 losses, 10 draws  
//     - Visa alla analyser, jämförelser och rekommendationer
// Skriv din kod här:


console.log("\n=== ÖVNINGAR KLARA! ===");
console.log("Kör nu 'node funktions-facit.js' för att kontrollera dina svar!");
