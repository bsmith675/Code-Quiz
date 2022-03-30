var questions = [
    {
        question: "Which president was in office for the majority of WW2?",
        choices: ["1. Ronald Reagan", "2. Franklin D. Roosevelt", "3. Harry S. Truman", "4. Dwight D. Eisenhower"],
        answer: "2. Franklin D. Roosevelt"
    },
    {
        question: "Which president dropped the atomic bomb on August 6, 1945?",
        choices: ["1. Woodrow Wilson", "2. Franklin D. Roosevelt", "3. Calvin Coolidge", "4. Harry S. Truman"],
        amswer: "4. Harry S. Truman"

    }
    {
        question: "What event lead the US to join WW2",
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

