var readlineSync = require("readline-sync")

var userName = readlineSync.question("What is your name? ")

console.log("Welcome to the quizz, " + userName, "!")
console.log("_____________________________")
console.log("Enter all answers in numbers!")


var score = 0

var highScores = [
  {name: "Shivi",
  score: 2},
  {name: "Chirag",
  score: 1},
  {name: "Monica",
  score: 0},
]

questions = [{
  
  question: "What is the value of pie upto 2 decimals? ",
  answer: "3.14"
}, {
  
  question: "How many metres are there in a kilometre? ",
  answer: "1000"
  }, {
  
  question: "How many color are there in a rainbow? ",
  answer: "7" 
},{
  
  question: "How many bones are there in a human body? ",
  answer: "206"}, {
  
  question: "How many planets are there in our solar system? ",
  answer: "8"}]

function checkAnswer (question, answer) {
  userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score = score + 1
    console.log("Correct Answer")
    
  } else {
    console.log("Incorrect answer")
  }
  console.log("Your score is ", score)
  console.log("-------------------------")
}

function checkHighScore () {
  for (var i = 0; i < highScores.length; i ++) {
    if (score > highScores[i].score){
      console.log("Congratulations. You have beaten the high score")
      console.log("Send a screenshot of the game so that I can update your high score.")
      
      break
    }
  }
}

function playGame () {
  for (var i = 0; i < questions.length; i ++) {
    checkAnswer(questions[i].question, questions[i].answer)
  } 

  console.log("Your final score is ", score)
  checkHighScore()
}

playGame();
