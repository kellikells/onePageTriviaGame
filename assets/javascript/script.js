

// ------array of objects: each object has: 
// ----------question/answers/correct answer 
var trivia = [{
    question: "The average size of a blue heart's whale is:",
    answers: ["a big dog", "a 32-inch tv", "a small car"],
    correct: "a small car"
}, {
    question: "A shrimp's heart is located in its:",
    answers: ["chest", "head", "tail"],
    correct: "head"
}, {
    question: "Males are called peacocks, while females are called:",
    answers: ["peahens", "peadgeons", "peamales"],
    correct: "peahens"
}, {
    question: "Which animal has a bite strong enough to crush a bowling ball?",
    answers: ["tiger", "crocodile", "grizzly bear"],
    correct: "grizzly bear"
}];


// ----------- FUNCTION: start button click -----------
// -- hides start button
// -- creates questions & answers
// -- starts timer 

$("#startButton").on("click", function () {
    $("#startButton").hide();

    // --- loop through array of questions/answers 
    for (let i = 0; i < trivia.length; i++) {

        let oneQuestion = trivia[i].question;
        console.log(oneQuestion);

        // -- putting the question to DOM
        $(".trivia-space").append("<h4>" + oneQuestion + "</h4>");

        // --- loop to build answers for each question 
        for (let j = 0; j < trivia[i].answers.length; j++) {

            let oneAnswer = trivia[i].answers[j];
            console.log(oneAnswer);

            // -- putting answers to DOM
            $(".trivia-space").append("<input type='radio' name='question-" + i + "' value='" + oneAnswer + "'/>" + oneAnswer);

        }
    }
})