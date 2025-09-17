// Array – En lista av element/värden

const myHobbies = ["träna", "programmera", "spendera tid med familjen", "resa"] // string[]
const myFavouriteNumbers = [10, 15, 20, 25] // number[]
const myBools = [true, false, false, true, true] // boolean[]
const myLists = [["träna", "äta", "sova"], [10, 15, 20, 25]] // En lista av två listor
const myValues = ["test", 15, true] // Inte rekommenderat att blanda typer i en array.

const player1 = {
    name: "Ahmad",
    age: 30,
    hobbies: ['träna', 'äta', 'sova'],
    profile: {
        image: "länk_till_bild",
        display_name: "särskild_användarnamn"
    }
}

const order = {
    id: 'order_nummer',
    total: 359,
    products: ['T-shirt', 'Bälte', 'Strumpor 2-pack'],
    paidAt: '2025-09-15',
    cashier: 'Sandra Lorén',
    paymentMethod: {
        type: 'card',
        number: '514812092038012381',
        cvv: '123',
        expiry: '12/26',
    }
}

console.log(order.paymentMethod.number)



const chokladBollar = {
    name: "Chokladbollar",
    ingredients: ['Havregryn', 'Kokos', 'Kakao'],
    time: 1,
}

console.log(order.cashier)