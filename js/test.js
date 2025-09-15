console.log("Hej där")

// 1. Data
// 2. Brahandling av data

// En variabel
let MyName = "Mosho"

// Equivalent till "print()"" i Python
console.log(MyName)

const personalNummer = "0123"

// string
const description = "Denna grabb är lite udda."

// Number
const age = 43

// Gör en uträkning med variabel
const result = age - 20
console.log(age)

// Bolean ger antingen sant eller falsk = True o False

const isAdult = true

console.log(isAdult)

// Array string
const myHobbies = ["Diska", "Fiska", "Promenera"]


// Array Numbers
const myNumbers = [1,2,,4,6,9]

console.log(myHobbies[1])

let blandadArray = [
  "text",        // 0 string
  42,            // 1 number
  true,          // 2 boolean
  null,          // 3 null
  undefined,     // 4 undefined
  { namn: "Moises", ålder: 30 }, // 5 object
  [1, 2, 3],     // 6 array (en array i arrayen, "nested array")
  function() { return "hej"; }  // 7 function
];

console.log(blandadArray[5])

// Object

const player1 = {
    name: "Mos",
    age: 5,
    hobbies: ['sova','gråta','äta']
}

const chokladbollar = {
    name: "Chokladbollar",
    ingredients: ['kakor','margarin']
}

console.log(chokladbollar.name)

const order = {
    id: "order_nummer",
    total: 34567,
    products:['T-shirt','byxor'],
    paidAt: '2025-09-15',
    cashier: 'Tutus Juanson',
    paymentMethod: {
        type: 'card',
        number: '2345678',
        cvv: '234',
        expiry: '12/26'
    }
}


console.log(order.paymentMethod.cvv)