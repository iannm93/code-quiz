var start = document.querySelector(".start")
var timer = document.querySelector(".timer")
var begin = document.querySelector(".begin")
var score = document.querySelector(".score")
var missed = document.querySelector(".missed")
var questionOne = document.getElementById("q1")
var answer1 = document.querySelector("#button1")
var answer2 = document.querySelector("#button2")
var answer3 = document.querySelector("#button3")
var answer4 = document.querySelector("#button4")
var answer5 = document.querySelector("#button5")
var answer6 = document.querySelector("#button6")
var answer7 = document.querySelector("#button7")
var answer8 = document.querySelector("#button8")
var answer9 = document.querySelector("#button9")
var answer10 = document.querySelector("#button10")
var answer11= document.querySelector("#button11")
var answer12= document.querySelector("#button12")
var answer13 = document.querySelector("#button13")
var answer14 = document.querySelector("#button14")
var answer15= document.querySelector("#button15")
var answer16= document.querySelector("#button16")
var answer17 = document.querySelector("#button17")
var answer18 = document.querySelector("#button18")
var answer19= document.querySelector("#button19")
var answer20= document.querySelector("#button20")

document.querySelector("#button1").value = "JavaScript";
document.querySelector("#button2").value = "HTML";
document.querySelector("#button3").value = "batman";
document.querySelector("#button4").value = "CSS";
document.querySelector("#button5").value = "Artificial Programming Intelligence";
document.querySelector("#button6").value = "Always Plan Intelligently";
document.querySelector("#button7").value = "API";
document.querySelector("#button8").value = "Artic Patrol Incorporated";
document.querySelector("#button9").value = "OL";
document.querySelector("#button10").value = "UL";
document.querySelector("#button11").value = "TL";
document.querySelector("#button12").value = "calculus";
document.querySelector("#button13").value = "br";
document.querySelector("#button14").value = "break";
document.querySelector("#button15").value = "linestop";
document.querySelector("#button16").value = "bk";
document.querySelector("#button17").value = "heading";
document.querySelector("#button18").value = "head";
document.querySelector("#button19").value = "h6";
document.querySelector("#button20").value = "h1";




  var buttonF1 = document.createElement("button")
  
  
  
  
  var q2 = document.getElementById("q2")
  var q3 = document.getElementById("q3")
  var q4 = document.getElementById("q4")
  var q5 = document.getElementById("q5")
  
  var userScore = 0
  var missedScore = 0
  
  
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
        answer5.textContent = "Artificial Programming Intelligence"
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
        score.textContent = 0
        missed.textContent = 0
        
    })
   

// if correct button is clicked, move to next question
if (answer2.value === "HTML"){
answer2.addEventListener("click",function (){
    
    q1.textContent = "Correct!"
    answer1.parentNode.removeChild(answer1)
    answer2.parentNode.removeChild(answer2)
    answer3.parentNode.removeChild(answer3)
    answer4.parentNode.removeChild(answer4)
    userScore++
    score.textContent = "Your score is " + userScore
  
   
    })
};
//  answer2.removeEventListener("click")
// update user's score

if (answer1.value === "JavaScript"){
answer1.addEventListener("click", function(){
        q1.textContent = "Wrong!"
        answer1.parentNode.removeChild(answer1)
        answer2.parentNode.removeChild(answer2)
        answer3.parentNode.removeChild(answer3)
        answer4.parentNode.removeChild(answer4)
        missedScore++
        score.textContent = "Your score is " + userScore
        missed.textContent = "You've missed " + missedScore
        timeLeftSub()
    })
    }

if (answer3.value === "batman"){
answer3.addEventListener("click", function(){
        q1.textContent = "Wrong!"
        answer1.parentNode.removeChild(answer1)
        answer2.parentNode.removeChild(answer2)
        answer3.parentNode.removeChild(answer3)
        answer4.parentNode.removeChild(answer4)
        missedScore++
        score.textContent = "Your score is " + userScore
        missed.textContent = "You've missed " + missedScore
        timeLeft-15
    })
    }

if (answer4.value === "CSS"){
answer4.addEventListener("click", function(){
        q1.textContent = "Wrong!"
        answer1.parentNode.removeChild(answer1)
        answer2.parentNode.removeChild(answer2)
        answer3.parentNode.removeChild(answer3)
        answer4.parentNode.removeChild(answer4)
        missedScore++
        missed.textContent = "You've missed " + missedScore
        score.textContent =  "Your score is "  + userScore
    })
    }
// if incorrect button is clicekd, also move to next queston


if (answer7.value === "API"){
answer7.addEventListener("click", function(){
        q2.textContent = "Correct!"
        answer5.parentNode.removeChild(answer5)
        answer6.parentNode.removeChild(answer6)
        answer7.parentNode.removeChild(answer7)
        answer8.parentNode.removeChild(answer8)
        userScore++
        score.textContent = "Your score is " +userScore
            
       
    })
    } 

if (answer5.value === "Artificial Programming Intelligence"){
answer5.addEventListener("click", function(){
        q2.textContent = "Wrong!"
        answer5.parentNode.removeChild(answer5)
        answer6.parentNode.removeChild(answer6)
        answer7.parentNode.removeChild(answer7)
        answer8.parentNode.removeChild(answer8)
        missedScore++
        missed.textContent = "You've missed " + missedScore
        
        
    })
    }
var incorrectAnswer5 = answer2

if (answer6.value === "Always Plan Intelligently"){
answer6.addEventListener("click", function(){
       
        q2.textContent = "Wrong!"
        answer5.parentNode.removeChild(answer5)
        answer6.parentNode.removeChild(answer6)
        answer7.parentNode.removeChild(answer7)
        answer8.parentNode.removeChild(answer8)
        missedScore++
        missed.textContent = "You've missed "  + missedScore
       
    })
    }

if (answer8.value === "Artic Patrol Incorporated"){
answer8.addEventListener("click", function(){
        q2.textContent = "Wrong!"
        answer5.parentNode.removeChild(answer5)
        answer6.parentNode.removeChild(answer6)
        answer7.parentNode.removeChild(answer7)
        answer8.parentNode.removeChild(answer8)
        missedScore++
        missed.textContent = "You've missed " + missedScore
    })
    }
   
 
  if (answer10.value === "UL"){
answer10.addEventListener("click", function(){
    
        q3.textContent = "Correct!"
        answer9.parentNode.removeChild(answer9)
        answer10.parentNode.removeChild(answer10)
        answer11.parentNode.removeChild(answer11)
        answer12.parentNode.removeChild(answer12)
        userScore++
        score.textContent = "Your score is " + userScore
       
          
    })
    }
    
if (answer11.value === "TL"){
    answer11.addEventListener("click", function(){
        q3.textContent = "Wrong!"
        answer9.parentNode.removeChild(answer9)
        answer10.parentNode.removeChild(answer10)
        answer11.parentNode.removeChild(answer11)
        answer12.parentNode.removeChild(answer12)
        missedScore++
        missed.textContent = "You've missed " + missedScore
    })
}

if (answer9.value === "OL"){
answer9.addEventListener("click", function(){
        q3.textContent = "Wrong!"
        answer9.parentNode.removeChild(answer9)
        answer10.parentNode.removeChild(answer10)
        answer11.parentNode.removeChild(answer11)
        answer12.parentNode.removeChild(answer12)
        missedScore++
        missed.textContent = "You've missed " + missedScore
    })
    }

    if (answer13.value === "br"){
answer13.addEventListener("click", function(){
        q4.textContent = "Correct!"
        answer13.parentNode.removeChild(answer13)
        answer14.parentNode.removeChild(answer14)
        answer15.parentNode.removeChild(answer15)
        answer16.parentNode.removeChild(answer16)
        userScore ++
        score.textContent = "Your score is " + userScore
    })
    }
    if (answer12.value === "calculus"){
answer12.addEventListener("click", function(){
        q3.textContent = "Wrong!"
        answer9.parentNode.removeChild(answer9)
        answer10.parentNode.removeChild(answer10)
        answer11.parentNode.removeChild(answer11)
        answer12.parentNode.removeChild(answer12)
        missedScore ++
        missed.textContent = "You've missed " + missedScore
    })
    }
    if(answer14.value === "break"){
        answer14.addEventListener("click", function(){
            q4.textContent = "Wrong!"
            answer13.parentNode.removeChild(answer13)
            answer14.parentNode.removeChild(answer14)
            answer15.parentNode.removeChild(answer15)
            answer16.parentNode.removeChild(answer16)
            userScore ++
            missedScore++
            missed.textContent= "You've missed " + missedScore
        })
    }
    if(answer15.value === "linestop"){
        answer15.addEventListener("click", function(){
            q4.textContent = "Wrong!"
            answer13.parentNode.removeChild(answer13)
            answer14.parentNode.removeChild(answer14)
            answer15.parentNode.removeChild(answer15)
            answer16.parentNode.removeChild(answer16)
            userScore ++ 
            missedScore++
            missed.textContent= "You've missed " + missedScore
        })
    }

    if(answer16.value === "bk"){
        answer16.addEventListener("click", function(){
            q4.textContent = "Wrong!"
            answer13.parentNode.removeChild(answer13)
            answer14.parentNode.removeChild(answer14)
            answer15.parentNode.removeChild(answer15)
            answer16.parentNode.removeChild(answer16)
            userScore ++
            missedScore++
            missed.textContent= "You've missed " + missedScore
        })
    }

    if(answer17.value === "heading"){
        answer17.addEventListener("click", function(){
            q5.textContent = "Wrong!"
            answer17.parentNode.removeChild(answer17)
            answer18.parentNode.removeChild(answer18)
            answer19.parentNode.removeChild(answer19)
            answer20.parentNode.removeChild(answer20)
            missedScore ++
            missed.textContent = "You've missed " + missedScore
        })
    }

 if (answer18.value ==="head"){
     answer18.addEventListener("click", function (){
        q5.textContent = "Wrong!"
        answer17.parentNode.removeChild(answer17)
        answer18.parentNode.removeChild(answer18)
        answer19.parentNode.removeChild(answer19)
        answer20.parentNode.removeChild(answer20)
        missedScore ++
        missed.textContent = "You've missed " + missedScore
     })
 }
 
 if (answer19.value ==="h6"){
    answer19.addEventListener("click", function (){
       q5.textContent = "Wrong!"
       answer17.parentNode.removeChild(answer17)
       answer18.parentNode.removeChild(answer18)
       answer19.parentNode.removeChild(answer19)
       answer20.parentNode.removeChild(answer20)
       missedScore ++
       missed.textContent = "You've missed " + missedScore
    })
}


if (answer20.value ==="h1"){
    answer20.addEventListener("click", function (){
       q5.textContent = "Correct!"
       answer17.parentNode.removeChild(answer17)
       answer18.parentNode.removeChild(answer18)
       answer19.parentNode.removeChild(answer19)
       answer20.parentNode.removeChild(answer20)
       userScore ++
       score.textContent = "Your score is  " + userScore
    })
}
var formEl = document.querySelector("form");
var itemInput = document.querySelector("#item-input");
var list = JSON.parse(localStorage.getItem("list"));

if (list === null) {
  list = [];
}

formEl.addEventListener("submit", function(event) {
  event.preventDefault();
  // get input
  var newItem = itemInput.value.trim();
 
  // add input to list
  list.push(newItem)

  // add to local storage
  localStorage.setItem("list", JSON.stringify(list))

  // navigate to list page
  document.location.href = "./list.html";
});




// and the user is presented with a question

// when the user answers this question

// they are presented with another question


// when the quiz runs out of questions

//  save the users score
//  show the users scores
