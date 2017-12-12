// https://stackoverflow.com/questions/45387331/simple-quiz-with-javascript
// Reference for local storage\session storage: https://stackoverflow.com/questions/14876222/store-multiple-options-in-localstorage-for-a-quiz


function quizAnswers(){
    sessionStorage.setItem('question1','1');
    sessionStorage.setItem('question2','4');
    sessionStorage.setItem('question3','4');
    sessionStorage.setItem('question4','2');
    sessionStorage.setItem('question5','2');
    sessionStorage.setItem('question6','4');
    sessionStorage.setItem('question7','5');
    sessionStorage.setItem('question8','1');
    sessionStorage.setItem('question9','3');
    sessionStorage.setItem('question10','1');
    sessionStorage.setItem('question11','2');
}

$(document).ready(function()(

    //Don't show the questions
    $('questions').hide();

    //Show Question 1
    $('#question1').show();


    $('#question1 #submit').click(function(
        $('.questions').hide();
        $('#question2').show();
        return false
    ));


    $('#question2 #submit').click(function(
        $('.questions').hide();
    $('#question3').show();
    return false
    ));

    $('#question3 #submit').click(function(
        $('.questions').hide();
    $('#question4').show();
    return false
    ));

    $('#question4 #submit').click(function(
        $('.questions').hide();
    $('#question5').show();
    return false
    ));

    $('#question5 #submit').click(function(
        $('.questions').hide();
    $('#question6').show();
    return false

    $('#question6 #submit').click(function(
        $('.questions').hide();
    $('#question7').show();
    return false
    ));


    $('#question7 #submit').click(function(
        $('.questions').hide();
    $('#question8').show();
    return false
    ));

    $('#question8 #submit').click(function(
        $('.questions').hide();
    $('#question9').show();
    return false
    ));

    $('#question9 #submit').click(function(
        $('.questions').hide();
    $('#question10').show();
    return false

    ));

    $('#question10 #submit').click(function(
        $('.questions').hide();
    $('#question11').show();
    return false
    ));

    ));




    // ));

