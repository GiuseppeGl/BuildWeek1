
const RisposteSbagliate = localStorage.getItem("arrayRisposteSbagliate");
const RisposteAzzeccate = localStorage.getItem("arrayRisposteAzzeccate");
const QuestionsTot = localStorage.getItem("questions");

let correctPerc = document.querySelector("#correctPerc");
let circlediv = document.querySelector("#circle");
let wrongPerc = document.querySelector("#wrongPerc");
let domcorrNum = document.querySelector("#domcorrNum");
let wrgqstNum = document.querySelector("#wrgqstNum");


correctPerc.innerText = (RisposteAzzeccate / QuestionsTot * 100).toFixed(1) + "%";
wrongPerc.innerText = (RisposteSbagliate / QuestionsTot * 100).toFixed(1) + "%";

domcorrNum.innerText = `${RisposteAzzeccate}/${QuestionsTot} questions`;
wrgqstNum.innerText = `${RisposteSbagliate}/${QuestionsTot} questions`;
