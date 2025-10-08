/*
 * @Author: MoS 
 * @Date: 2025-10-08 09:26:11 
 * @Last Modified by: MoS
 * @Last Modified time: 2025-10-08 10:10:12
 */

const nameTitle = document.getElementById("name-title")
const nameInput = document.getElementById("name-input")

// Hämtar från localStorage, beter sig som ett object. Hämtar bara värdet. (Det behövs endast en parameter.)
const savedName = localStorage.getItem("name")

if (savedName) {

    nameTitle.textContent = `Ditt namn: ${namn}` 
}

const saveName = () => {

    // LocalStorage sparar som en objekt! KEY + Value ... tänk att localstorage ger inget tillbaka öven om det är en funktion... ger en s.k. "void"

    const namn = nameInput.value

    localStorage.setItem("name", namn)

    //Spara namenet i local Storage
    nameTitle.textContent = `Ditt namn: ${namn}` 

    //Tömmer inputfältet
    nameInput.value = ""

}