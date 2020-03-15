var start = document.querySelector(".start")
var timer = document.querySelector(".timer")
var begin = document.querySelector(".begin")
var score = document.querySelector(".score")
var questions = [
    { q: "Commonly used data types DO NOT include", a: "alerts" },
    { q: "The condition in an if/else statement is enclosed within_____.", a: "parentheses" },
    { q: "Array in JavaScript can be used to store_____.", a: "all of the above" },
    { q: "String values must be enclosed within_____when being assigned to variables.", a: "quotes" },
    { q: "A very useful tool used during development and debugging for printing content to the debugger is:", a: "console log" },
]
var questionOne = document.getElementById("q1")
var answer1 = document.querySelector(".button1")
var answer2 = document.querySelector(".button2")
var answer3 = document.querySelector(".button3")
var answer4 = document.querySelector(".button4")
 document.querySelector(".button2").value = "HTML";
document.querySelector(".button1").value = "JavaScript";
document.querySelector(".button3").value = "batman";
document.querySelector(".button4").value = "CSS";




  var buttonF1 = document.createElement("button")
  
  
  
  
  var q2 = document.getElementById("q2")
  var q3 = document.getElementById("q1")
  
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
    //  question one , answer 2 is correct
    start.addEventListener("click", function(){
        q1.textContent = "What is the primary language used in web development"
        answer1.textContent = "JavaScript"
        answer2.textContent = "HTML"
        answer3.textContent = "batman"
        answer4.textContent = "CSS"
    })
   

// if correct button is clicked, move to next question
answer2.addEventListener("click",function (){
    
    if (answer2.value === "HTML"){
    q1.textContent = "What does API stand for?"
    answer1.textContent = "Artifical Programming Intelligence"
    answer2.textContent = "Always Plan Intelligently"
    answer3.textContent = "Artificial Programming Interface"
    answer4.textContent = " Artic Patrol Incorporated "
    userScore++
    score.textContent = "Your score is " + userScore
    document.querySelector(".button2").value = "Always Plan Intelligently"; 
    document.querySelector(".button1").value = "Artifcial Programming Intelligence"
    document.querySelector(".button3").value = "API"
    document.querySelector("button4").value = "Artic Patrol Incorporated"
 }})
//  answer2.removeEventListener("click")
// update user's score
answer1.addEventListener("click", function(){
    if (answer1.value === "JavaScript"){
        q1.textContent = "What does API stand for?"
        answer1.textContent = "Artifical Programming Intelligence"
        answer2.textContent = "Always Plan Intelligently"
        answer3.textContent = "Artificial Programming Interface"
        answer4.textContent = " Artic Patrol Incorporated "
        missed++
        score.textContent = "Your score is " +userScore
        document.querySelector(".button2").value = "Always Plan Intelligently"; 
        document.querySelector(".button1").value = "Artifcial Programming Intelligence"
        document.querySelector(".button3").value = "API"
        document.querySelector("button4").value = "Artic Patrol Incorporated"
    }
})

answer3.addEventListener("click", function(){
    if (answer3.value === "batman"){
        q1.textContent = "What does API stand for?"
        answer1.textContent = "Artifical Programming Intelligence"
        answer2.textContent = "Always Plan Intelligently"
        answer3.textContent = "Artificial Programming Interface"
        answer4.textContent = " Artic Patrol Incorporated "
        missed++
        score.textContent = "Your score is " +userScore
        document.querySelector(".button2").value = "Always Plan Intelligently"; 
        document.querySelector(".button1").value = "Artifcial Programming Intelligence"
        document.querySelector(".button3").value = "API"
        document.querySelector("button4").value = "Artic Patrol Incorporated"
    }
})

answer4.addEventListener("click", function(){
    if (answer4.value === "CSS"){
        q1.textContent = "What does API stand for?"
        answer1.textContent = "Artifical Programming Intelligence"
        answer2.textContent = "Always Plan Intelligently"
        answer3.textContent = "Artificial Programming Interface"
        answer4.textContent = " Artic Patrol Incorporated "
        missed++
        score.textContent = "Your score is " +userScore
        document.querySelector(".button2").value = "Always Plan Intelligently"; 
        document.querySelector(".button1").value = "Artifcial Programming Intelligence"
        document.querySelector(".button3").value = "API"
        document.querySelector("button4").value = "Artic Patrol Incorporated"
    }
})
// if incorrect button is clicekd, also move to next queston

answer3.addEventListener("click", function(){
    if (answer3.value === "API"){
        q1.textContent = "testing some stuff"
        answer1.textContent = "test 1234"
        answer2.textContent = "testing 109"
        answer3.textContent = "le test"
        answer4.textContent = " rahrahrah "
        userScore++
        score.textContent = "Your score is " + userScore
        document.querySelector(".button3").value = "BR"

    }
})







function secondQuestion(){
    
    q1.textContent = "What does API stand for?"
    answer1.textContent = "Artifical Programming Intelligence"
    answer2.textContent = "Always Plan Intelligently"
    answer3.textContent = "Artificial Programming Interface"
    answer4.textContent = " Artic Patrol Incorporated "
    userScore++
    score.textContent = "Your score is " + userScore
    
}

function thirdQuestion(){
q1.textContent = "10101010101"
answer1.textContent = "100"
answer2.textContent = "yes"
answer3.textContent = "bo-00"
answer4.textContent = " 00"
userScore++
score.textContent = "Your score is " + userScore


}
// and the user is presented with a question

// when the user answers this question

// they are presented with another question


// when the quiz runs out of questions

//  save the users score
//  show the users scores
console.log(answer2.value)
console