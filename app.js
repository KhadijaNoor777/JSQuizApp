
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
    new Question("Which of the following function of Array object sorts the elements of an array?", ["toSource()", "toString()", "unshift()", "sort()"], "sort()"),
    new Question("Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?", ["charAt()", "charCodeAt()", "concat()", "indexOf()"], "charCodeAt()"),
    new Question("Which of the following function of String object executes the search for a match between a regular expression and a specified string?", ["concat()", "match()", "replace()", "search()"], "search()"),
    new Question("Which of the following function of String object creates a string to blink as if it were in a <blink> tag?", ["anchor()", "big()", "blink()", "italics()"], "blink()"),
    new Question("Which of the following function of String object causes a string to be displayed as struck-out text, as if it were in a <strike> tag?", ["sup()", "small()", "strike()", "sub()"], "strike()"),
    new Question("Inside which HTML element do we put the JavaScript?", ["script", "head", "meta", "style"], "script"),
    new Question("Among the following, which one is a ternary operator in JavaScript?", ["#", "::", "&:", "?:"], "?:"),
    new Question("Which of the following function inserts a value to the start of the array?", ["push()", "sort()", "unshift()", "pop()"], "unshift()")
];

var quiz = new Quiz(questions);

displayQuestions();