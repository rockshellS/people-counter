

let countEl = document.querySelector("#count-el")
let saveEl = document.querySelector('#save-el')


let count = 0
function increment() {
 count += 1
 countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
    
}

function save() {
   let countSaves =  " " + count + " - "
    saveEl.textContent += countSaves
    countEl.textContent = 0
    count = 0
}


