
/* sto provando ad inserire le stelline mentre questa parla */


//

let contenitoreStelle = document.querySelector("#starRating");
let button = document.querySelector("button");
let starsLeft = document.querySelector("#starsLeft");
let starsRec = document.querySelector("#starsRec");
let comment = document.querySelector("#comment");

//Nel "contenitoreStelle" prendi ogni elemento (stella) aggiungi un Event Listener che vede l'hover e aggiunge la classe "starHover"(che serve a colorarla)

/* contenitoreStelle.forEach(stella => {
    stella.addEventListener("mouseover", () => {
        stella.classList.add("starHover");
    })
}); */

let stelleSVG = document.querySelectorAll(".star");

stelleSVG.forEach((stella, index) => {
    stella.addEventListener("mouseover", () => {
        for(let i=0; i <= index; i++) {
            stelleSVG[i].classList.add("starHover")
        }
    })
    stella.addEventListener("mouseout", () => {
        stelleSVG.forEach(stella => {
            stella.classList.remove("starHover");
        })
    })
    stella.addEventListener("click", () => {
        starsRec.value = index+1
        stelleSVG.forEach(stella => stella.classList.remove("starClicked"))
        for(let i=0; i<= index; i++){
            stelleSVG[i].classList.add("starClicked")
        }
    })
})

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (starsRec.value === "ciao") {
        alert("Please rate EPICODE before continuing.");
    } else if (comment.value.trim() === "") {
        alert("Please leave a comment before continuing.");
    } else {
        location.href = "index5.html";
    }
});

