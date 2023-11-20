
let checkbox = document.querySelector("#checkbox");     //Richiamiamo la checkbox
let button = document.querySelector("#proceedbtn");     //Richiamiamo il bottone "PROCEDI"
console.dir(checkbox.checked)                           //Stampa di controllo per identificare l'attributo "checked" (ovvero che valore ha la checkbox quando spuntata)

button.addEventListener('click', (e) => {               //Aggiungiamo un "event listener" al bottone (quando viene clickato)
    e.preventDefault();                                 //Annulliamo l'azione di default del bottone (refresh pagina)
    if (checkbox.checked === true){                     //Condizione: SOLO SE la checkbox è spuntata (e diventa true) allora...
    location.href = "sceltaDifficolta.html"                       //Reindirizzami all'index
    }
})

