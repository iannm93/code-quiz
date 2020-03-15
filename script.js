var start = document.querySelector(".start")
var timer = document.querySelector(".timer")
var begin = document.querySelector(".begin")

var questionOne = document.getElementById("q1")
var answer1 = document.querySelector(".button1")
var answer2 = document.querySelector(".button2")
var answer3 = document.querySelector(".button3")
var answer4 = document.querySelector(".button4")


var userScore = 0
var missed = 0


// when user opens the page and cliks the start button
start.addEventListener("click", function () {

    var timeLeft = 60
    // an interval begins
    var timeInterval = setInterval(function () {
        timer.textContent = timeLeft + " seconds remaining"
        timeLeft--;

        if (timeLeft === 0) {
            clearInterval(timeInterval)
            timer.textContent = "you're out of time!"
        }
    }, 1000)

})
console.log(answer1)

start.addEventListener("click", function(){
q1.textContent = "What is the primary language used in web development"
answer1.textContent = "JavaScript"
answer2.textContent = "HTML"
answer3.textContent = "batman"
answer4.textContent = "CSS"
})

// create another event listener that gives the first question when buttion is clicked
// 

// and the user is presented with a question

// when the user answers this question

// they are presented with another question


// when the quiz runs out of questions

//  save the users score
//  show the users score 
//~~*~~*~~*~~*~~*~~*_READ THIS WHEN YOU COME BACK TO WORK ON THIS TOM~*~*~*~*~*~*~~*~~*~~~*
//  you just need to outline this entire project with event listeners, use event listeners to pin text content where
// you want it from question to quest