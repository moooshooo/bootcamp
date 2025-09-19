
const result3 = add(10, 5)

// Också vanligt
// Global funktion, går att kalla på från överallt, även kodrader innan den skapas.
function add(a, b) {
    const sum = a + b
    console.log(sum)

    return sum
}


// Mycket vanligt, rekommenderat
// Lokal funktion som endast finns tillgänglig i det lokala sammanhanget
// Kan ej anropas före den har definerats.
const subtract = (a, b) => {
    return a - b
}

const result4 = subtract(10, 5)

const subtract2 = (a, b) => a - b

const result5 = subtract2(2, 1)

console.log(result5)


// Ovanligt
const subtract3 = function(a, b) {
    return a - b
}

const result = add(10, 5)

const result2 = add(5, 3)


function greet2(name) {
    console.log(name)
}

// Arrow-funktion
const greet = name => console.log(name)


/*

=> betyder en arrow-funktion. Det som finns till vänster om arrow symbolen
är parametrarna, alltså (). Om vi endast har en parameter så behövs inte parantes.

Det som är till höger om arrow-symbolen är den faktiska kod som kommer köras i funktionen. Om vi endast ämnar att köra en rad kod i våran funktion, kan vi skippa
måsvingarna alltså, {} tecknet. Om vi skippar måsvingarna så kommer den raden kod automatiskt returneras.

*/

greet("Ahmad")











/* Exempel på användning av let (Mutable approach)

let shippingCost = 69

const productsAmount = 400

if (productsAmount > 500) {
    shippingCost = 0
}

const totalAmount = shippingCost + productsAmount

console.log("Total summa: " + totalAmount + "kr")

*/










function sendReceipt(receipt) {

    // Hämtar kvittot
    // Hämtar kunden e-post

    sendEmail(receipt)
}

function getSimiliarProducts(productId) {

    return []
}


function sendRecommendation() {

    // Hämta produkter som kunden har tittat på

    const similiarProducts = getSimiliarProducts("product_a")

    // Hämta kunden e-post
    const customerEmail = 'ahmad@test.com'

    sendEmail(customerEmail, similiarProducts)


}


function sendEmail(emailAddress, receipt) {

    // Den här funktionen är ansvarig över att skicka mejlet med receipt i, till emailAddress.


}

add(5, 10) // Vi anropar funktionen add, och skickar in värdena 5 och 10.

add(2, 8)

