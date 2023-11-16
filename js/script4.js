
/* sto provando ad inserire le stelline mentre questa parla */


//

let contenitoreStelle = document.querySelector("#starRating");
let button = document.querySelector("button");
let starsLeft = document.querySelector("#starsLeft");

//Nel "contenitoreStelle" prendi ogni elemento (stella) aggiungi un Event Listener che vede l'hover e aggiunge la classe "starHover"(che serve a colorarla)

contenitoreStelle.forEach(stella => {
    stella.addEventListener("mouseover", () => {
        stella.classList.add("starHover");
    })
});
