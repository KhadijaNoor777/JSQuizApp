
function displayQuestions(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        var e1 = document.getElementById("question");
        e1.innerHTML = quiz.getQuestion().text;

        var choices = quiz.getQuestion().choices;
        for(var i=0; i<choices.length; i++){
            var e2 = document.getElementById("ch"+i);
            e2.innerHTML=choices[i];
            guess("btn"+i, choices[i]);
        }

        showProgress();
    }
}

function showScores(){
    var finalScores = "<h1 style='margin-top: 100px'>RESULT</h1>";
    finalScores += "<h2 id='score'>Your Scores: " + quiz.scores + "</h2>";
    var e3 = document.getElementById("quiz");
    e3.innerHTML= finalScores;
}

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
       quiz.updateScore(guess);
       displayQuestions(); 
    }
}

function showProgress()
{
    var questionNumber = quiz.questionIndex+1;
    var e = document.getElementById("progress");
    e.innerHTML= "Question " + questionNumber + " of " + quiz.questions.length;
}

var questions = [
    new Question("Which of the following function of Number object forces a number to display in exponential notation?", ["toExponential()", "toFixed()", "toPrecision()", "toLocaleString()"], "toExponential()"),
    new Question("Which of the following function of Array object removes the last element from an array and returns that element?", ["push()", "pop()", "map()", "join()"], "pop()"),
    new Question("Which of the following function of Array object sorts the elements of an array?", ["toSource()", "toString()", "unshift()", "sort()"], "sort()")
];

var quiz = new Quiz(questions);

displayQuestions();