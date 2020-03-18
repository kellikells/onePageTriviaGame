
// ========== VARIABLES ===============


let correct = 0;
let incorrect = 0;
let unanswered = 0;

// ------array of objects: each object has: 
// ----------question/answers/correct answer 
const trivia = [{
    question: '__ million people play everyday',
    answers: ['1', '3', '5'],
    correct: '5'
}, {
    question: 'Most players are on the app for __ minutes each day',
    answers: ['9', '26', '58'],
    correct: '26'
}, {
    question: 'Over 88 ______ Pokemon have been caught',
    answers: ['thousand', 'million', 'billion'],
    correct: 'billion'
}, {
    question: 'Approximately ___ million people have downloaded the PokemonGo app',
    answers: ['100', '500', '750'],
    correct: '750'
}, {
    question: 'Players have accumulated 144 _______ steps while playing',
    answers: ['billion', 'trillion', 'quintillion'],
    correct: 'billion'
}, {
    question: 'Nintendo\'s stock prices increased __% after the PokemonGo app launched.',
    answers: ['85', '42', '23'],
    correct: '23'
}, {
    question: 'Pokemon Go was spurred by an April Fool\'s joke in ____.  The joke was a job posting for a Pokemon Master and the idea of players exploring a map catching pokemon',
    answers: ['2007', '2010', '2014'],
    correct: '2014'
}];


// =========== Hiding the "submit" input =========
$(document).ready(function () {
    $("#submitButton").hide();
});

/// ================ TIMER =======================

let initialTime = 60;
let gameTimer;

function startTimer() {
    gameTimer = setInterval(decrement, 1000);
}

function decrement() {
    initialTime--;
    $("#timer").text(initialTime + " seconds to answer `em all");
    // console.log(initialTime);
}

// to stop the timer 
function stopTimer() {
    clearInterval(gameTimer);
}


// ========= FUNCTION: start button click ==========
// -- hides start button & shows submit 'button'
// -- creates & starts a timer 
// -- creates questions & answers

$("#startButton").on("click", function () {

    $("#startButton").hide();
    $("#submitButton").show();



    startTimer();


    // --- loop through array of questions/answers 
    for (let i = 0; i < trivia.length; i++) {

        let oneQuestion = trivia[i].question;
        console.log(oneQuestion);

        // -- putting the question to DOM
        $("#trivia-space").append("<h4>" + oneQuestion + "</h4>");

        // --- loop to build answers for each question 
        for (let j = 0; j < trivia[i].answers.length; j++) {

            let oneAnswer = trivia[i].answers[j];
            console.log(oneAnswer);

            // -- putting answers to DOM
            $("#trivia-space").append("<input type='radio' name='question-" + i + "' value='" + oneAnswer + "'/>" + oneAnswer);
        }
    }
});


// ========= FUNCTION: SUBMIT --- LOGIC =========
$("#submitButton").on("click", function () {
    stopTimer();
    for (let i = 0; i < trivia.length; i++);
    console.log(trivia.length);

})




