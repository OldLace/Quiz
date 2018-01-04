

function quizComplete() {

    function quizAnswers (questName) {
        let choices = document.getElementsByName(questName);

        for (let i = 0, length = choices.length; i < length; i++) {
            if (choices[i].checked) {

                userChoice = Number(choices[i].value);
            }
        }
        // change NaNs to zero
        if (isNaN(userChoice)) {
            userChoice = 0;
        }
        return userChoice;
    }

    // Add up the player's score
    let scoreResult = (quizAnswers('q1') + quizAnswers('q2') + quizAnswers('q3') + quizAnswers('q4') + quizAnswers('q5') + quizAnswers('q6') + quizAnswers('q7') + quizAnswers('q8') + quizAnswers('q9') + quizAnswers('q10'));
    console.log("Player Score is: " + scoreResult);


    let questionCountArray = document.getElementsByClassName('question');

    let questionTracker = 0;
    for (let i = 0, length = questionCountArray.length; i < length; i++) {
        questionTracker++;
    }

    let quizResult = "Your Score: " + scoreResult +"/" + questionTracker;

    if (scoreResult === questionTracker) {
        quizResult = quizResult + "&nbsp; <strong>Perfect Score!</strong>"
    };
    document.getElementById('userScore').innerHTML = quizResult;
}

$(document).ready(function() {
    $('#submitButton').click(function() {
        $(this).addClass('hide');
    });

});
