var start = document.querySelector(".start")
var timer = document.querySelector(".timer")
var begin = document.querySelector(".begin")
var score = document.querySelector(".score")
var missed = document.querySelector(".missed")
var questionOne = document.getElementById("q1")
var answer1 = document.querySelector(".button1")
var answer2 = document.querySelector(".button2")
var answer3 = document.querySelector(".button3")
var answer4 = document.querySelector(".button4")
var answer5 = document.querySelector(".button5")
var answer6 = document.querySelector(".button6")
var answer7 = document.querySelector(".button7")
var answer8 = document.querySelector(".button8")
var answer9 = document.querySelector(".button9")
var answer10 = document.querySelector(".button10")
var answer11= document.querySelector(".button11")
var answer12= document.querySelector(".button12")
var answer13 = document.querySelector(".button13")
var answer14 = document.querySelector(".button14")
var answer15= document.querySelector(".button15")
var answer16= document.querySelector(".button16")
var answer17 = document.querySelector(".button17")
var answer18 = document.querySelector(".button18")
var answer19= document.querySelector(".button19")
var answer20= document.querySelector(".button20")

document.querySelector(".button1").value = "JavaScript";
document.querySelector(".button2").value = "HTML";
document.querySelector(".button3").value = "batman";
document.querySelector(".button4").value = "CSS";
document.querySelector(".button5").value = "Artifical Programming Intelligence";
document.querySelector(".button6").value = "Always Plan Intelligently";
document.querySelector(".button7").value = "Artifical Programming Interface";
document.querySelector(".button8").value = "Artic Patrol Incorporated";
document.querySelector(".button9").value = "OL";
document.querySelector(".button10").value = "UL";
document.querySelector(".button11").value = "TL";
document.querySelector(".button12").value = "calculus";
document.querySelector(".button13").value = "br";
document.querySelector(".button14").value = "break";
document.querySelector(".button15").value = "linestop";
document.querySelector(".button16").value = "bk";
document.querySelector(".button17").value = "heading";
document.querySelector(".button18").value = "head";
document.querySelector(".button19").value = "h6";
document.querySelector(".button20").value = "h1";




  var buttonF1 = document.createElement("button")
  
  
  
  
  var q2 = document.getElementById("q2")
  var q3 = document.getElementById("q3")
  var q4 = document.getElementById("q4")
  var q5 = document.getElementById("q5")
  
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
        q2.textContent = "What does API stand for"
        answer5.textContent = "Artifical Programming Intelligence"
        answer6.textContent = "Always Plan Intelligently"
        answer7.textContent = "Artifical Programming Interface"
        answer8.textContent = "Artic Patrol Incorporated"
        q3.textContent = "Which HTML element creates a bulleted list?"
        answer9.textContent = "OL"
        answer10.textContent = "UL"
        answer11.textContent = "TL"
        answer12.textContent = "calculus"
        q4.textContent = "Which is the correct HTML element for making a line break?"
        answer13.textContent = "br"
        answer14.textContent = "break"
        answer15.textContent = "linestop"
        answer16.textContent = "bk"
        q5.textContent = "Choose the correct HTML tag for the largest heading."
        answer17.textContent = "heading"
        answer18.textContent = "head"
        answer19.textContent = "h6"
        answer20.textContent = "h1"
        
    })
   
    var correctAnswer1 = answer2

// if correct button is clicked, move to next question
if (correctAnswer1.value === "HTML"){
correctAnswer1.addEventListener("click",function (){
     console.log(correctAnswer1)
    q1.textContent = "Correct!"
    answer1.textContent = ""
    answer2.textContent = ""
    answer3.textContent = ""
    answer4.textContent = ""
    userScore++
    score.textContent = "Your score is " + userScore
  
   
    })
};
//  answer2.removeEventListener("click")
// update user's score

if (answer1.value === "JavaScript"){
answer1.addEventListener("click", function(){
        q1.textContent = "Wrong!"
        answer1.textContent = ""
        answer2.textContent = ""
        answer3.textContent = ""
        answer4.textContent = ""
        missed++
        userScore.textContent = "Your score is " + userScore
        missed.textContent = "You've missed " + missed
       
    })
    }

if (answer3.value === "batman"){
answer3.addEventListener("click", function(){
        q1.textContent = "Wrong!"
        answer1.textContent = ""
        answer2.textContent = ""
        answer3.textContent = ""
        answer4.textContent = ""
        missed++
        userScore.textContent = "Your score is " + userScore
        missed.textContent = "You've missed " + missed
        
    })
    }

if (answer4.value === "CSS"){
answer4.addEventListener("click", function(){
        q1.textContent = "Wrong!"
        answer1.textContent = ""
        answer2.textContent = ""
        answer3.textContent = ""
        answer4.textContent = ""
        missed++
        missed.textContent = "You've missed " + missed
        userScore.textContent =  "Your score is "  + userScore
    })
    }
// if incorrect button is clicekd, also move to next queston


if (answer3.value === "API"){
answer3.addEventListener("click", function(){
        q2.textContent = "Correct!"
        answer5.textContent = ""
        answer6.textContent = ""
        answer7.textContent = ""
        answer8.textContent = ""
        userScore++
        userScore.textContent = "Your score is " +userScore
            
       
    })
    } 
var incorrectAnswer4 = answer1
if (incorrectAnswer4.value === "Artificial Programming Intelligence"){
incorrectAnswer4.addEventListener("click", function(){
        q2.textContent = "Which HTML tag creates a bulleted list"
        answer5.textContent = ""
        answer6.textContent = ""
        answer7.textContent = ""
        answer8.textContent = ""
        missed++
        
    })
    }
var incorrectAnswer5 = answer2

if (incorrectAnswer5.value === "Always Plan Intelligently"){
incorrectAnswer5.addEventListener("click", function(){
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
       
    })
    }
var incorrectAnswer6 = answer4
if (incorrectAnswer6.value === "Artic Patrol Incorporated"){
incorrectAnswer6.addEventListener("click", function(){
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
     
    })
    }
    function findButton(event) {
        var target = event.target;
        console.log(target.value);
    }findButton()
  var correctAnswer3 = answer2
  if (correctAnswer3.value === "ul"){
correctAnswer3.addEventListener("click", function(){
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
          
    })
    }
incorrectAnswer7 = answer1
if (incorrectAnswer7.value === "ol"){
incorrectAnswer7.addEventListener("click", function(){
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
    })
    }

    if (answer3.value === "BR"){
answer3.addEventListener("click", function(){
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
    })
    }
    if (answer4.value === "calculus"){
answer4.addEventListener("click", function(){
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
    })
    }





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