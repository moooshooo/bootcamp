console.log("Chas e weird")

function changeText(){
    console.log("Wooow du har tryckt på en knapp")
}

const testArrowFuncChangeText = () => {
    console.log("Detta blir resultat från en arrow function, som endast syns i webbläsarens console")
}

const ArrowFuncChangeText = () => {
    //Ändrar by ID
    //const minPelement = document.getElementById("message")
    //Ändrar by Class
    const minPelement = document.getElementsByClassName("classMessage").item(2)

    //Ändrar texten
    minPelement.textContent= "En ny text i min P HTML element"
   /*  //Säkerthetsställer att vi har fått en text
    if (minPelement) {
        //Ändrar texten
        minPelement.textContent= "En ny text i min P HTML element"
    }  */
}

//Variabel för en egen toggle, den blir global och när den är placerad utanför säkertsstäler att när den loopar så kan du gå tillbaka till en ursprung. Behöver ha en referens.
let currentColor = "lightblue"

const changeColor = () => {
    //Finns 2 sätt att definera classen
    //const newBoxColor = document.getElementsByClassName("box").item(0)
   const newBoxColor = document.getElementsByClassName("box")[0]
    
    //Lägger till en ny class "red" 
    newBoxColor.classList.toggle("red")

    //Du kan ändra din style direct här
    //newBoxColor.style.backgroundColor = "yellow"

    //En egen toggle
    if (currentColor === "lightblue"){
        newBoxColor.style.backgroundColor = "yellow"
        currentColor = "yellow"
    } else {
        newBoxColor.style.backgroundColor = "lightblue"
        currentColor = "lightblue"
    }
}
const hideTitle = () => {
    const title = document.getElementsByTagName("h1")[0]
    const btnText = document.getElementById("titleBtn")
    if (title.hidden) {
        title.hidden = false
        btnText.textContent = "Dölj titeln"
    }else {
        title.hidden = true
        btnText.textContent = "Visa titeln"
    }
}

let newPost = true

setInterval( () => {
    const omFinnsIDElementet = document.getElementById("notification")
   
    if (newPost){
        notification.textContent = "Missa inte!"
        newPost = false
        }
        else{
        notification.textContent = "Det blinkar!"
        newPost = true
    }
},1000)
