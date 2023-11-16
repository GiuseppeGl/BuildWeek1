const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let punteggio = 0; // definito variabile globale per punteggio utente
let questionNumber = 0; // variabile per tenere traccia del numero o posizione della domanda presentata
let arrayAnswers = []; // array che contiene le risposte
let risposte = document.querySelector("#risposte"); // variabile che seleziona il  div con id #risposte

let h1 = document.querySelector("h1"); //selezionato h1

let arrayRisposteAzzeccate = [];
let arrayRisposteSbagliate = [];

window.addEventListener("load", () => {
  h1.innerText = questions[questionNumber].question; //funzione che riporta la prima domanda che pesca dentro l'array questions
  arrayAnswers = [
    ...questions[questionNumber].incorrect_answers,
    questions[questionNumber].correct_answer,
  ];
  console.log(arrayAnswers);
  // Spread operator: => (usato per svuotare il contenuto dell'array incorrect_answers in un altro array, quello in cui si trova (arrayAnswers)),
  // in unico array messe tutte le risposte corretta , e sbagliate.

  for (let i = 0; i < arrayAnswers.length; i++) {
    let divRisposta = document.createElement("div");
    divRisposta.classList.add("risposta");
    divRisposta.classList.add(`risposta${i + 1}`);
    risposte.appendChild(divRisposta); // ciclo for per ciclare l'arrayAnswers, fino a 4 in questo caso
    // innerText alle risposte della variabile let risposte #risposte, ad ogni div [i] cambiamo il testo in base all'indice
  }

  for (let i = 0; i < arrayAnswers.length; i++) {
    risposte.children[i].innerText = arrayAnswers[i];
  }

  //console.dir(risposte)
  arrayAnswers = [];

  updateQuestionCounter();                                      //richiamo la funzione per tenere traccia dell'avanzamento del test

  // azzerato l'arrayAnswer per i prossimi cicli
});


risposte.addEventListener("click", (evento) => changeQuestion(evento))


function updateQuestionCounter() {                                                  // Funzione per aggiornare l'avanzamento del test
  let questionCounter = document.querySelector(".questionCounter");
  questionCounter.innerHTML = "";                                                  // Pulisce i vecchi contatori di domande
  let counterRisposte = document.createElement("p");
  counterRisposte.innerHTML = `<p class="questionCounter">QUESTION ${questionNumber + 1}<span>/${
    questions.length
  }</span> </p>` ;
  questionCounter.appendChild(counterRisposte);
}



/* 
 let timeStartSecond = 30;
let time = 0.5 * 60;

setInterval(timer, 1000)

function timer() {

let seconds = time % 60;

let timerDom = document.querySelector('#timer')

timerDom.innerHTML = `${seconds}`;


time--;

if (time < 0) {

  clearInterval(timer);

}
} 

 */

let timer = document.querySelector(".timer");
let time = 5000;
let circle = document.querySelector(".inner-circle");
let outerCircle = document.querySelector(".outer-circle");
/* circle.addEventListener("click", () => {
  timer.style.background =
    "conic-gradient(from 0deg, rgb(131, 193, 211) 0deg, transparent 0deg)";
}); */

// console.dir(timer)

let timeInSeconds = time / 1000;
let refresh = 100;
let totCycles = time / refresh;
let remainingCycles = totCycles;
let divSecond = document.querySelector('#seconds');
divSecond.innerText = timeInSeconds;

function handleTimer(time) {
  let interval = setInterval(() => {
    remainingCycles--;

    let gradi = (360 / totCycles) * (totCycles - remainingCycles);
    timer.style.background = `conic-gradient(from 0deg, rgb(131, 193, 211) ${gradi}deg, transparent ${gradi}deg)`;
    // console.log('ciao')
    if (gradi > 280) {
      outerCircle.style.background = "rgb(255, 42, 0)";
    } else if (gradi > 200) {
      outerCircle.style.background = "rgb(255, 139, 49)";
    }
  }, refresh);

  let seconds = setInterval(() => {
    timeInSeconds--;
    divSecond.innerText = timeInSeconds;
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    clearInterval(seconds);
    changeQuestion();
  }, time);
}

handleTimer(time);



function changeQuestion() {
  if (questionNumber < questions.length - 1) {
    risposte.innerHTML = "";
    if (evento.target.innerText === questions[questionNumber].correct_answer) {
      arrayRisposteAzzeccate.push(questions[questionNumber]);
    } else {
      arrayRisposteSbagliate.push(questions[questionNumber]);
    }

    questionNumber++;

    h1.innerText = questions[questionNumber].question; //funzione che riporta la prima domanda che pesca dentro l'array questions
    arrayAnswers = [
      ...questions[questionNumber].incorrect_answers,
      questions[questionNumber].correct_answer,
    ];
    console.log(arrayAnswers);
    // Spread operator: => (usato per svuotare il contenuto dell'array incorrect_answers in un altro array, quello in cui si trova (arrayAnswers)),
    // in unico array messe tutte le risposte corretta , e sbagliate.
    for (let i = 0; i < arrayAnswers.length; i++) {
      let divRisposta = document.createElement("div");

      divRisposta.classList.add("risposta");
      divRisposta.classList.add(`risposta${i + 1}`);
      risposte.appendChild(divRisposta);
    }

    for (let i = 0; i < arrayAnswers.length; i++) {
      risposte.children[i].innerText = arrayAnswers[i];
    }
    updateQuestionCounter();                                                      // ad ogni click aggiorno il contatore dell'avanzamento del test
    //console.dir(risposte)

    arrayAnswers = [];
    console.log(
      evento.target.innerText === questions[questionNumber].correct_answer
    );
    console.log(questionNumber);
    console.log(arrayRisposteAzzeccate);
    console.log(arrayRisposteSbagliate);
  } else {
    location.href = "index3.html";
  }
}