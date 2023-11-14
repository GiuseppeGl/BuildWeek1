let checkbox = document.querySelector("#checkbox");
console.dir(checkbox.checked)

let button = document.querySelector("#proceedbtn");
button.addEventListener('click', (e) => {
    e.preventDefault();
    if (checkbox.checked === true){
    location.href = "index2.html" 
    }
})

