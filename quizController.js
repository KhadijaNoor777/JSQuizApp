function Quiz(questions){
    this.questions=questions;
    this.scores=0;
    this.questionIndex=0;
}

Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function(){
    return this.questionIndex === this.questions.length;
}

Quiz.prototype.updateScore = function(answer){
    
    if(this.getQuestion().correctAnswer(answer)){
        this.scores++;
    }
    this.questionIndex++;
}

