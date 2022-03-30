var questions = [
    {
        question: "Which president was in office for the majority of WW2?",
        choices: ["1. Ronald Reagan", "2. Franklin D. Roosevelt", "3. Harry S. Truman", "4. Dwight D. Eisenhower"],
        answer: "2. Franklin D. Roosevelt"
    },
    {
        question: "Which president dropped the atomic bomb on August 6, 1945?",
        choices: ["1. Woodrow Wilson", "2. Harry S. Truman", "3. Calvin Coolidge", "4. Franklin D. Roosevelt"],
        amswer: "2. Harry S. Truman"

    },
    {
        question: "What event lead to the US involvement in WW2",
        choices: ["1. Nazi Invasion of Poland", "2. Pearl Harbor", "3. Incursions of U-Boats in Atlantic", "4. None of The Above"],
        answer: "2. Pearl Harbor"
    }

];

var timeLeft = 60;
var timerEl = document.querySelector("#timer")
var titleEl = document.querySelector("#title")
var startButtonEl = document.querySelector("#start-btn")
var startContainerEl = document.querySelector("#start-container")
var questionContainerEl = document.querySelector("#question-container")
var answerCheck = document.querySelector("#answer-checker")
var questionEl = document.querySelector('#question')
var ScoreEl = document.querySelector("#score-container")
var questionIndex = 0;
var listOfHighScores = document.getElementById("listOfHighScores");
var initialFormEl = document.querySelector("#input")
var submitInitialBtn = document.querySelector("#submitInitialBtn")
var highScoreBtn = document.querySelector("#highscore-link")
var initialInput = document.getElementById("initialInput");

///This section is for the button variable///

var answer1 = document.querySelector('#btn1')
var answer2 = document.querySelector('#btn2')
var answer3 = document.querySelector('#btn3')
var answer4 = document.querySelector('#btn4')

var newQuiz = function(d) {
    timeLeft = 60
    timerEl.textContent = timeLeft
    initialInput.textContent = "";


    var startTimer = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time Remaining: " + timeLeft;
        if(timeLeft <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameover();
            }
        }
    },1000);

}

startButtonEl.addEventListener("click", function() {
    newQuiz();
    startContainerEl.classList.add("hide")
    nextQuestion();
});

var nextQuestion = function() {
    questionContainerEl.classList.remove("hide");
    questionEl.textContent = questions[questionIndex].question;
    answer1.textContent = questions[questionIndex].choices[0];
    answer2.textContent = questions[questionIndex].choices[1];
    answer3.textContent = questions[questionIndex].choices[2];
    answer4.textContent = questions[questionIndex].choices[3];
}

function checkAnswer(answer) {
    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        answerCheck.textContent = "Correct!"
    } else {
        timeLeft -= 10
        answerCheck.textContent = "Wrong!"
    }

    questionIndex++;

    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        gameover();
    }

}

function storeHighScores(event) {
    event.preventDefault();

    if (initialInput.value === "") {
        alert("Enter Your Name");
        return;
    }

    var savedHighScores = localStorage.getItem("High Scores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialInput.value,
        score: document.getElementById('scoreKeeper').textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);

    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high Scores", scoresArrayString);

    showHighScores();

    
}

var choose1 = function() {checkAnswer(0);};
var choose2 = function() {checkAnswer(1);};
var choose3 = function() {checkAnswer(2);};
var choose4 = function() {checkAnswer(3);};
var gameover = function(event) {

    initialFormEl.classList.remove("hide")

    questionContainerEl.classList.add("hide")
    
    answerCheck.classList.add("hide")

    var section = document.createdElement('section');
    section.setAttribute('id', 'gameover')

    var h1 = document.createElement('h1');
    h1.innerHTML = "Good Job"

    var p = document.createElement('p');
    p.setAttribute('id', 'scoreKeeper')
    p.innerHTML = "You now have a final score of: " + timeLeft

    section.appendChild(h1);
    section.appendChild(p);
    document.body.appendChild(section);
}

var showHighScores = function () {

    document.getElementById('gameover').classList.add('hide')
    initialFormEl.classList.add('hide')

    var section = document.createElement('section')
    section.setAttribute('id', 'HighScoreList')
    document.body.appendChild(section);

    var highScores = localStorage.getItem("high scores");

    if (highScores === null) {
        return;
    }

    var storedHighScores = JSON.parse(highScores);
    for (var i = 0; i < storedHighScores.length; i++) {
        var newHighScore = document.createElement("p");
        newHighScore.innerHTML = storedHighScores[i].initials + storedHighScores[i].score
        section.appendChild(newHighScore);
    }
};

answer1.addEventListener("click", choose1);
answer2.addEventListener("click", choose2);
answer3.addEventListener("click", choose3);
answer4.addEventListener("click", choose4);

submitInitialBtn.addEventListener("click", function(event){
    storeHighScores(event);
});
highScoreBtn.addEventListener("click", showHighScores);
