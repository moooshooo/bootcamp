/*
FACIT - FUNKTIONER OCH VILLKOR
===============================

Detta facit innehåller kompletta lösningar för funktions-övningarna.
Jämför dina lösningar med dessa för att se olika sätt att skriva kod.

Obs: Det finns ofta flera korrekta sätt att lösa samma problem!
*/

console.log("=== FACIT - FUNKTIONER OCH VILLKOR ===\n");

/*
ÖVNING 1: ÅLDERSKONTROLL - LÖSNINGAR
====================================
*/

console.log("1. ÅLDERSKONTROLL - LÖSNINGAR");
console.log("------------------------------");

// 1a) checkAge funktion
function checkAge(age) {
    return age >= 18;
}

// 1b) ageCategory funktion  
const ageCategory = (age) => {
    if (age < 13) {
        return "Barn";
    } else if (age <= 17) {
        return "Tonåring";
    } else if (age <= 64) {
        return "Vuxen";
    } else {
        return "Pensionär";
    }
};

// 1c) Tester
console.log("16 år - Myndig:", checkAge(16), "Kategori:", ageCategory(16));
console.log("25 år - Myndig:", checkAge(25), "Kategori:", ageCategory(25));
console.log("70 år - Myndig:", checkAge(70), "Kategori:", ageCategory(70));

console.log("\n");

/*
ÖVNING 2: BETYGSYSTEM - LÖSNINGAR
=================================
*/

console.log("2. BETYGSYSTEM - LÖSNINGAR");
console.log("--------------------------");

// 2a) calculateGrade funktion
const calculateGrade = (points) => {
    if (points >= 90) {
        return "A";
    } else if (points >= 80) {
        return "B";
    } else if (points >= 70) {
        return "C";
    } else if (points >= 60) {
        return "D";
    } else {
        return "F";
    }
};

// 2b) isPassed funktion
const isPassed = (points) => {
    return points >= 60;
};

// 2c) gradeMessage funktion
function gradeMessage(name, points) {
    const grade = calculateGrade(points);
    const passed = isPassed(points);
    const status = passed ? "är godkänd" : "är inte godkänd";
    
    return `${name} fick betyget ${grade} och ${status}`;
}

// 2d) Tester
console.log(gradeMessage("Erik", 85));
console.log(gradeMessage("Sara", 45));
console.log(gradeMessage("Lisa", 92));

console.log("\n");

/*
ÖVNING 3: PRISBERÄKNING - LÖSNINGAR
===================================
*/

console.log("3. PRISBERÄKNING - LÖSNINGAR");
console.log("-----------------------------");

// 3a) calculateDiscount funktion
const calculateDiscount = (price, discountCode) => {
    let discountPercent = 0;
    
    if (discountCode === "STUDENT") {
        discountPercent = 15;
    } else if (discountCode === "SENIOR") {
        discountPercent = 20;
    } else if (discountCode === "VIP") {
        discountPercent = 25;
    }
    
    const discountAmount = price * (discountPercent / 100);
    return price - discountAmount;
};

// 3b) shippingCost funktion
function shippingCost(price, deliveryCountry) {
    if (price >= 500) {
        return 0; // Gratis frakt
    }
    
    if (deliveryCountry === "Sverige") {
        return 50;
    } else if (deliveryCountry === "Norge" || deliveryCountry === "Danmark") {
        return 100;
    } else {
        return 200; // Övriga länder
    }
}

// 3c) totalCost funktion
const totalCost = (price, discountCode, deliveryCountry) => {
    const priceAfterDiscount = calculateDiscount(price, discountCode);
    const shipping = shippingCost(priceAfterDiscount, deliveryCountry);
    return priceAfterDiscount + shipping;
};

// 3d) Tester
console.log("600 kr, STUDENT, Sverige:", totalCost(600, "STUDENT", "Sverige"), "kr");
console.log("300 kr, VIP, Norge:", totalCost(300, "VIP", "Norge"), "kr");
console.log("800 kr, INVALID, Finland:", totalCost(800, "INVALID", "Finland"), "kr");

console.log("\n");

/*
ÖVNING 4: LÖNEBERÄKNING - LÖSNINGAR
===================================
*/

console.log("4. LÖNEBERÄKNING - LÖSNINGAR");
console.log("-----------------------------");

// 4a) calculateTax funktion
function calculateTax(grossSalary) {
    if (grossSalary < 20000) {
        return 0;
    } else if (grossSalary <= 50000) {
        return grossSalary * 0.30;
    } else {
        return grossSalary * 0.35;
    }
}

// 4b) calculateNetSalary funktion
const calculateNetSalary = (grossSalary) => {
    const tax = calculateTax(grossSalary);
    return grossSalary - tax;
};

// 4c) salaryReport funktion
const salaryReport = (name, grossSalary) => {
    const tax = calculateTax(grossSalary);
    const netSalary = calculateNetSalary(grossSalary);
    
    return `${name}: Brutto ${grossSalary} kr, Skatt ${tax} kr, Netto ${netSalary} kr`;
};

// 4d) Tester
console.log(salaryReport("Maria", 35000));
console.log(salaryReport("Johan", 15000));
console.log(salaryReport("Anna", 60000));

console.log("\n");

/*
ÖVNING 5: UTMANINGSÖVNING - SPELBETYG - LÖSNINGAR
=================================================
*/

console.log("5. UTMANINGSÖVNING - SPELBETYG - LÖSNINGAR");
console.log("-------------------------------------------");

// 5a) analyzeGame funktion
function analyzeGame(playerName, wins, losses, draws) {
    const totalGames = wins + losses + draws;
    const winPercentage = totalGames > 0 ? (wins / totalGames) * 100 : 0;
    
    let category;
    if (winPercentage >= 80) {
        category = "Mästare";
    } else if (winPercentage >= 60) {
        category = "Expert";
    } else if (winPercentage >= 40) {
        category = "Medel";
    } else if (winPercentage >= 20) {
        category = "Nybörjare";
    } else {
        category = "Träning behövs";
    }
    
    return {
        name: playerName,
        wins: wins,
        losses: losses,
        draws: draws,
        totalGames: totalGames,
        winPercentage: Math.round(winPercentage),
        category: category
    };
}

// 5b) comparePlayers funktion
const comparePlayers = (player1, player2) => {
    if (player1.winPercentage > player2.winPercentage) {
        return `${player1.name} är bättre än ${player2.name} (${player1.winPercentage}% vs ${player2.winPercentage}%)`;
    } else if (player2.winPercentage > player1.winPercentage) {
        return `${player2.name} är bättre än ${player1.name} (${player2.winPercentage}% vs ${player1.winPercentage}%)`;
    } else {
        return `${player1.name} och ${player2.name} är lika bra (${player1.winPercentage}%)`;
    }
};

// 5c) recommendation funktion
const recommendation = (playerObject) => {
    const category = playerObject.category;
    
    if (category === "Mästare") {
        return "Fortsätt dominera!";
    } else if (category === "Expert") {
        return "Snart mästarnivå!";
    } else if (category === "Medel") {
        return "Bra jobbat, fortsätt träna!";
    } else if (category === "Nybörjare") {
        return "Träna mer för att förbättras";
    } else {
        return "Fokusera på grunderna";
    }
};

// 5d) Tester
const erik = analyzeGame("Erik", 80, 15, 5);
const sara = analyzeGame("Sara", 30, 40, 10);

console.log("=== SPELANALYS ===");
console.log(`${erik.name}: ${erik.totalGames} spel, ${erik.winPercentage}% vinst, Kategori: ${erik.category}`);
console.log(`Rekommendation: ${recommendation(erik)}`);
console.log("");

console.log(`${sara.name}: ${sara.totalGames} spel, ${sara.winPercentage}% vinst, Kategori: ${sara.category}`);
console.log(`Rekommendation: ${recommendation(sara)}`);
console.log("");

console.log("=== JÄMFÖRELSE ===");
console.log(comparePlayers(erik, sara));

console.log("\n=== FACIT KLART! ===");
console.log("Grattis om dina lösningar matchade! 🎉");
