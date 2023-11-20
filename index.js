let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let table1 = document.getElementById("table1")
let table2 = document.getElementById("table2")

function getRandomPassword() {
    let givenPasswordLength = document.getElementById("password-length").value
    let numbersToggle = document.getElementById("numbers-toggle").checked
    let symbolsToggle = document.getElementById("symbols-toggle").checked

    let password1 = ""
    let password2 = ""
    let characters = [...letters]
    
    if (numbersToggle && symbolsToggle) {
        characters = [...characters, ...numbers, ...symbols]
    } else if (symbolsToggle) {
        characters = [...characters, ...symbols]
    } else {
        characters = [...characters, ...numbers]
    }
    
    if (givenPasswordLength < 8) {
        for (let i = 0; i < 9; i++) {
            password1 += characters[Math.floor(Math.random() * characters.length)]
            password2 += characters[Math.floor(Math.random() * characters.length)]
        }
        document.getElementById("password-length").value = 8
    } else if (givenPasswordLength > 20) {
        for (let i = 0; i < 21; i++) {
            password1 += characters[Math.floor(Math.random() * characters.length)]
            password2 += characters[Math.floor(Math.random() * characters.length)]
        }
        document.getElementById("password-length").value = 20
    } else {
        for (let i = 0; i < 16; i++) {
            password1 += characters[Math.floor(Math.random() * characters.length)]
            password2 += characters[Math.floor(Math.random() * characters.length)]
        }
    }
    
    table1.textContent = password1
    table2.textContent = password2
}
