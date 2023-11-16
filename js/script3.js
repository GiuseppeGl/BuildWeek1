
const RisposteSbagliate = localStorage.getItem("arrayRisposteSbagliate");
const RisposteAzzeccate = localStorage.getItem("arrayRisposteAzzeccate");
const QuestionsTot = localStorage.getItem("questions");

//Selettori
let correctPerc = document.querySelector("#correctPerc");
let circlediv = document.querySelector("#circle");
let wrongPerc = document.querySelector("#wrongPerc");
let domcorrNum = document.querySelector("#domcorrNum");
let wrgqstNum = document.querySelector("#wrgqstNum");
let outer2 = document.querySelector("#outer2")
let passOrNot = document.querySelector("#passOrNot");
let azzurro = document.querySelector("#azzurro");
let certificate = document.querySelector("#certificate");
let button = document.querySelector("button")

//Percentuali
correctPerc.innerText = (RisposteAzzeccate / QuestionsTot * 100).toFixed(1) + "%";
wrongPerc.innerText = (RisposteSbagliate / QuestionsTot * 100).toFixed(1) + "%";

//Domande completate
domcorrNum.innerText = `${RisposteAzzeccate}/${QuestionsTot} questions`;
wrgqstNum.innerText = `${RisposteSbagliate}/${QuestionsTot} questions`;

if(parseInt(correctPerc.innerText) >= 60) {
    passOrNot.innerText = "Congratulations!";
    azzurro.innerText = "You passed the exam.";
    certificate.innerText = "We'll send you the certificate in few minutes. Check your email (including promotions/spam folder)"
}
else {
    passOrNot.innerText = "Too bad!";
    azzurro.innerText = "You didn't pass the exam.";
    certificate.innerText = "You'll receive stocazzo";
}

//Riempimento cerchio risposte in base a percentuale

let sbagliate = (RisposteSbagliate / QuestionsTot * 100) * 3.6

outer2.style.background = `conic-gradient(from 0deg, #d20094 ${sbagliate}deg, transparent ${sbagliate}deg)`

