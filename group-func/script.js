/*
 * @Author: MoS 
 * @Date: 2025-10-01 11:40:51 
 * @Last Modified by: MoS
 * @Last Modified time: 2025-10-01 11:58:03
 */

const elever = [
    "erik",
    "jennifer",
    "Christoffer"
]

let randomElever = new Set()

while (randomElever.size < elever.length) {
    const randomIndex = Math.floor(Math.random() * elever.length) 

    const randomIndexElever = elever[randomIndex]

    randomElever.add(randomIndex)
}

/* for (const i=0; < names.lenght; i++) {
    
} */

console.log(randomIndexElever)