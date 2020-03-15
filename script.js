var start = document.querySelector(".start")
var timer = document.querySelector(".timer")
var begin = document.querySelector(".begin")
var score = document.querySelector(".score")
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
   
    var correctAnswer1 = answer2

// if correct button is clicked, move to next question
if (correctAnswer1.value === "HTML"){
correctAnswer1.addEventListener("click",function (){
     console.log(correctAnswer1)
    q1.textContent = "What does API stand for?"
    answer1.textContent = "Artifical Programming Intelligence"
    answer2.textContent = "Always Plan Intelligently"
    answer3.textContent = "Artificial Programming Interface"
    answer4.textContent = " Artic Patrol Incorporated "
    userScore++
    score.textContent = "Your score is " + userScore
    document.querySelector(".button2").value = "Always Plan Intelligently"; 
    document.querySelector(".button1").value = "Artificial Programming Intelligence"
    document.querySelector(".button3").value = "API"
    document.querySelector(".button4").value = "Artic Patrol Incorporated"
   
    })
};
//  answer2.removeEventListener("click")
// update user's score
var incorrectAnswer1 = answer1
incorrectAnswer1.addEventListener("click", function(){
    if (incorrectAnswer1.value === "JavaScript"){
        q1.textContent = "What does API stand for?"
        answer1.textContent = "Artifical Programming Intelligence"
        answer2.textContent = "Always Plan Intelligently"
        answer3.textContent = "Artificial Programming Interface"
        answer4.textContent = "Artic Patrol Incorporated"
        missed++
        score.textContent = "Your score is " +userScore
        document.querySelector(".button2").value = "Always Plan Intelligently"; 
        document.querySelector(".button1").value = "Artifcial Programming Intelligence"
        document.querySelector(".button3").value = "API"
        document.querySelector(".button4").value = "Artic Patrol Incorporated"
        removeEventListener(answer1)
    }
})
var incorrectAnswer2 = answer3
incorrectAnswer2.addEventListener("click", function(){
    if (incorrectAnswer2.value === "batman"){
        q1.textContent = "What does API stand for?"
        answer1.textContent = "Artifical Programming Intelligence"
        answer2.textContent = "Always Plan Intelligently"
        answer3.textContent = "Artificial Programming Interface"
        answer4.textContent = "Artic Patrol Incorporated"
        missed++
        score.textContent = "Your score is " +userScore
        document.querySelector(".button2").value = "Always Plan Intelligently"; 
        document.querySelector(".button1").value = "Artificial Programming Intelligence"
        document.querySelector(".button3").value = "API"
        document.querySelector(".button4").value = "Artic Patrol Incorporated"
        removeEventListener(answer3)
    }
})
var incorrectAnswer3 = answer4
incorrectAnswer3.addEventListener("click", function(){
    if (incorrectAnswer3.value === "CSS"){
        q1.textContent = "What does API stand for?"
        answer1.textContent = "Artifical Programming Intelligence"
        answer2.textContent = "Always Plan Intelligently"
        answer3.textContent = "Artificial Programming Interface"
        answer4.textContent = "Artic Patrol Incorporated"
        missed++
        score.textContent = "Your score is " +userScore
        document.querySelector(".button2").value = "Always Plan Intelligently"; 
        document.querySelector(".button1").value = "Artificial Programming Intelligence"
        document.querySelector(".button3").value = "API"
        document.querySelector(".button4").value = "Artic Patrol Incorporated"
        removeEventListener(answer4)
    }
})
// if incorrect button is clicekd, also move to next queston

var correctAnswer2 = answer3
correctAnswer2.addEventListener("click", function(){
    if (correctAnswer2.value === "API"){
        q1.textContent = "Which HTML tag creates a bulleted list"
        answer1.textContent = "ol"
        answer2.textContent = "UL"
        answer3.textContent = "BR"
        answer4.textContent = "calculus"
        userScore++
        score.textContent = "Your score is " + userScore
        document.querySelector(".button3").value = "BR"
        document.querySelector(".button1").value = "ol"
        document.querySelector(".button2").value = "ul"
        document.querySelector(".button4").value = "calculus"        
       
    } 
})
var incorrectAnswer4 = answer1
incorrectAnswer4.addEventListener("click", function(){
    if (incorrectAnswer4.value === "Artificial Programming Intelligence"){
        q1.textContent = "Which HTML tag creates a bulleted list"
        answer1.textContent = "ol"
        answer2.textContent = "UL"
        answer3.textContent = "BR"
        answer4.textContent = "calculus"
        missed++
        score.textContent = "Your score is " + userScore
        document.querySelector(".button3").value = "BR"
        document.querySelector(".button1").value = "ol"
        document.querySelector(".button2").value = "ul"
        document.querySelector(".button4").value = "calculus"  
       
    }
})
var incorrectAnswer5 = answer2

incorrectAnswer5.addEventListener("click", function(){
    if (incorrectAnswer5.value === "Always Plan Intelligently"){
        console.log(answer2.value)
        q1.textContent = "Which HTML tag creates a bulleted list"
        answer1.textContent = "ol"
        answer2.textContent = "UL"
        answer3.textContent = "BR"
        answer4.textContent = "calculus"
        missed++
        score.textContent = "Your score is " + userScore
        document.querySelector(".button3").value = "BR"
        document.querySelector(".button1").value = "ol"
        document.querySelector(".button2").value = "ul"
        document.querySelector(".button4").value = "calculus"   
       
    }
})
var incorrectAnswer6 = answer4
incorrectAnswer6.addEventListener("click", function(){
    if (incorrectAnswer6.value === "Artic Patrol Incorporated"){
        q1.textContent = "Which HTML tag creates a bulleted list"
        answer1.textContent = "ol"
        answer2.textContent = "UL"
        answer3.textContent = "BR"
        answer4.textContent = "calculus"
        missed++
        score.textContent = "Your score is " + userScore
        document.querySelector(".button3").value = "BR"
        document.querySelector(".button1").value = "ol"
        document.querySelector(".button2").value = "ul"
        document.querySelector(".button4").value = "calculus"   
     
    }
})
    function findButton(event) {
        var target = event.target;
        console.log(target.value);
    }findButton()
  var correctAnswer3 = answer2
correctAnswer3.addEventListener("click", function(){
    if (correctAnswer3.value === "ul"){
        console.log(answer2.value)
        q1.textContent = "Which is the correct HTML tag for making a line break?"
        answer1.textContent = "br"
        answer2.textContent = "break"
        answer3.textContent = "linestop"
        answer4.textContent = "bk"
        userScore++
        score.textContent = "Your score is " + userScore
        document.querySelector(".button3").value = "br"
        document.querySelector(".button1").value = "break"
        document.querySelector(".button2").value = "linestop"
        document.querySelector(".button4").value = "bk" 
          
    }
})
incorrectAnswer7 = answer1
incorrectAnswer7.addEventListener("click", function(){
    if (incorrectAnswer7.value === "ol"){
        q1.textContent = "Which is the correct HTML tag for making a line break?"
        answer1.textContent = "br"
        answer2.textContent = "break"
        answer3.textContent = "linestop"
        answer4.textContent = "bk"
        missed ++
        score.textContent = "Your score is " + userScore
        document.querySelector(".button3").value = "br"
        document.querySelector(".button1").value = "break"
        document.querySelector(".button2").value = "linestop"
        document.querySelector(".button4").value = "bk"   
    }
})

answer3.addEventListener("click", function(){
    if (answer3.value === "BR"){
        q1.textContent = "Which is the correct HTML tag for making a line break?"
        answer1.textContent = "br"
        answer2.textContent = "break"
        answer3.textContent = "linestop"
        answer4.textContent = "bk"
        missed ++
        score.textContent = "Your score is " + userScore
        document.querySelector(".button3").value = "br"
        document.querySelector(".button1").value = "break"
        document.querySelector(".button2").value = "linestop"
        document.querySelector(".button4").value = "bk"   
    }
})
answer4.addEventListener("click", function(){
    if (answer4.value === "calculus"){
        q1.textContent = "Which is the correct HTML tag for making a line break?"
        answer1.textContent = "br"
        answer2.textContent = "break"
        answer3.textContent = "linestop"
        answer4.textContent = "bk"
        missed ++
        score.textContent = "Your score is " + userScore
        document.querySelector(".button3").value = "br"
        document.querySelector(".button1").value = "break"
        document.querySelector(".button2").value = "linestop"
        document.querySelector(".button4").value = "bk"   
    }
})





// and the user is presented with a question

// when the user answers this question

// they are presented with another question


// when the quiz runs out of questions

//  save the users score
//  show the users scores
console.log(answer2.value)
console.log(answer1.value)
console.log(answer3.value)
console.log(answer4.value)