$(document).ready(function() {

let points = 0



    //Show Question 1
    $('#question1').show();


    $('#question1 #submit').click(function() {
        $('.questions').hide();
        calculateAnswers('#question1')
        $('#question2').show();
        return false

current = $(this).parents('form:first').data('answer');
next = $(this).parents('form:first').data('answer')+1;


    //Don't show the questions
    $('.questions').hide();

    //Show next question
    $('#question'+next'').show;

    calculateAnswers(''+current+'');

    });




function calculateAnswers(question){
    if(question == "question1") {
        let submitted = $('input[id=question1').val();
        if(submitted == sessionStorage.question1 {
            points++;
        }
    }
}


    // $('.questions')


//     $('#question2 #submit').click(function(){
//         $('.questions').hide();
//     $('#question3').show();
//     return false
// ));
//
//     $('#question3 #submit').click(function(){
//         $('.questions').hide();
//     $('#question4').show();
//     return false
// ));

});






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
    $('#question10').show;
    return false

    ));

    $('#question10 #submit').click(function(
        $('.questions').hide();
    $('#question11').show;
    return false
    ));

    ));







function quizAnswers()(
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

)

