function Question(text,choices,answer){
  this.text = text;
  this.choices = choices,
  this.answer = answer;

}
// Question Prototype
Question.prototype.checkAnswer =function(answer){
  return this.answer === answer;
}

// Quiz Constructor
function Quiz(questions){
  this.questions =questions;
  this.score = 0;
  this.questionIndex =0

}

// Quiz Prototype
Quiz.prototype.getQuestion = function(){
  return this.questions[this.questionIndex];
}
// Quiz isFinish
Quiz.prototype.isFinish = function(){
  return this.questions.length === this.questionIndex;
}


Quiz.prototype.guess = function(answer){
  var question= this.getQuestion();

  if(question.checkAnswer(answer)){
    this.score++;
  }
  this.questionIndex++;
}

var q1 = new Question("whats the best lang?",['c#','javascript','python','asp.net'],"javascript");

var q2 = new Question("whats the most lang?",['c#','javascript','python','asp.net'],"javascript");


var q3 = new Question("whats the modern lang?",['c#','javascript','python','asp.net'],"javascript");

var questions = [q1,q2,q3];

//Start Quiz *****************************

var quiz = new Quiz(questions);

loadQuestions();

function loadQuestions(){
  if(quiz.isFinish()){
    showScore();
  }else{//h5 in question id:
    var question = quiz.getQuestion();
    var choices = question.choices;

    document.querySelector('#question').textContent = question.text; 

    for(var i =0; i<choices.length; i++){
      var element = document.querySelector('#choice'+i);
      element.innerHTML= choices[i];
      guess('btn'+i,choices[i]);
    }
    showProgress();


    // console.log(choices);
  }
}

function guess(id,guess){
var btn = document.getElementById(id)
btn.onclick = function(){
  quiz.guess(guess);
  loadQuestions()
}
}

function showScore(){
var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;
document.querySelector('.card-body').innerHTML = html;
}

function showProgress(){
  var totalQuestion = quiz.questions.length;
  var questionNumber = quiz.questionIndex+1 ;
  document.querySelector('#progress').innerHTML= 'Question '+questionNumber+ ' of '+totalQuestion; 
}







// console.log(quiz.isFinish());
// console.log(quiz.getQuestion());
// console.log(quiz.isFinish());


/****************************************** */
// quiz.guess('javascript');
// quiz.guess('python');
// quiz.guess('javascript');

//****************************************** */
// console.log(q1.checkAnswer('c#'));
// console.log(q1.checkAnswer('javascript'));

// console.log(q2.checkAnswer('visual basic'));
// console.log(q2.checkAnswer('javascript'));


































