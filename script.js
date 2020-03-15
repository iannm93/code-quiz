var start = document.querySelector(".start")
var timer = document.querySelector(".timer")
var begin = document.querySelector(".begin")


console.log(start)
// when user opens the page and cliks the start button
start.addEventListener("click", function(){

    var timeLeft = 60
    // an interval begins
    var timeInterval = setInterval(function(){
        timer.textContent = timeLeft + " seconds remaining"
        timeLeft--;

        if (timeLeft === 0){
            clearInterval(timeInterval)
            timer.textContent= "you're out of time!"
        }
    }, 1000) 
      
})


// and the user is presented with a question

// when the user answers this question

// they are presented with another question


// when the quiz runs out of questions

//  save the users score
//  show the users score 