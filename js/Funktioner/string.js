const myName = "Magnus"
const age = 35

const message = "Jag heter Ahmad och jag är 30 år gammal."

const messageDynamicOld = "Jag heter " + myName + " och jag är " + age + " år gammal."

const messageDynamic = `Jag heter ${myName} och jag är ${age} år gammal.`

'' // Vanlig string
"" // Vanlig string
`` // Vanlig string, men med stöd för dynamisk data

console.log(messageDynamicOld)
