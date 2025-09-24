/* 
Author: Mos
Date: 2025-09-24

 */
console.log("Empowered by: MoS")

const inputField = document.getElementById("inputField")
const taskList = document.getElementById("taskList")

//lägger till knapp med ren html
const deleteBtn = "<button>Ta bort</button>"

const addTask = () => {
    console.log("Startar addTask() funktionen")
    
    //Hämtar innehåll från fältet
    const todoName = inputField.value
    
    //Skriver ut todoName data som skrivit
    //console.log(todoName)

    //Skapa ToDo
    
    //Denna Variabel skapar en HTML element <li>
    const listItem = document.createElement("li")

    //Skapar en div inuti <li> med en class
    const listItemContainer = document.createElement("div")
    listItemContainer.classList.add("listItemContainer")

    //Skapar en ta bort knapp
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("deleteBtn")
    deleteBtn.textContent = "Ta bort"

    listItemContainer.textContent = todoName

    //Ren HTML
    //listItem.innerHTML = todoName + deleteBtn

    //Lägg till i listan
    taskList.appendChild(listItemContainer)

    //Rensar input listan
    inputField.value = ""

}