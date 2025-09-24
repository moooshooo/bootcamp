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

    const listItemContainer = document.createElement("div").classList("test")


    //listItem.textContent = todoName

    //Ren HTML
    //listItem.innerHTML = todoName + deleteBtn

    //Lägg till i listan
    taskList.appendChild(listItem)

    

    //Rensar input listan
    inputField.value = ""



}