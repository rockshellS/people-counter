

let countEl = document.getElementById("count-el")



let count = 0
function increment() {
 count = count + 1
 countEl.innerHTML = count
}

function decrement() {
    count = count - 1
    countEl.innerHTML = count
    
}

function save() {
    console.log(count)
}
save()