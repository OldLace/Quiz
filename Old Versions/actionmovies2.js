
// Quiz question obtained from: http://thepioneerwoman.com/fun-and-learning/action-movie-quiz-answers-and-winners/
// Additional quiz questions obtained from: https://triviachamp.com/Action-Movies-Trivia-Questions.php



// const questions = [
//     {
//         question: "blah blah",
//         a: 'one',
//         b: 'two',
//         c: 'three',
//         correct: 'a'
//     },
//     {
//         question: "blah blah BLAH",
//         a: 'one',
//         b: 'two',
//         c: 'three',
//         correct: 'a'
//     }
// ]
//hidden
// document.querySelector('#question').innnerHTML = questions[0].question;


let correctCounter = 0;
let incorrectCounter = 0;
let tracker = 0;
let score = 0;


sessionStorage.setItem('answer1','a');
sessionStorage.setItem('answer2','d');
sessionStorage.setItem('answer3','d');
sessionStorage.setItem('answer4','d');
sessionStorage.setItem('answer5','c');
sessionStorage.setItem('answer6','b');
sessionStorage.setItem('answer7','a');
sessionStorage.setItem('answer8','e');
sessionStorage.setItem('answer9','c');
sessionStorage.setItem('answer10','e');
sessionStorage.setItem('answer11','c');




const question1 = {
    question : 'Who is the villain in Die Hard?',
    answerSelections: ['Hans Gruber','Hans Mueller','Hans Bruner','Hans Pruner','Patrick Shannon'],
    choicesInBoolean: [true, false, false, false, false],
    answer : 'Hans Gruber',
    answerIndex: '0'

};

    const question2 = {
    question: 'John Rambo is a veteran of what war?',
    answerSelections: ['World War I','Korean War','World War II','Vietnam War','The Gulf War'],
    choicesInBoolean : [false, false, false, true, false],
    answer : 'Vietnam War',
       answerIndex: '3'
};

    const question3 = {
    question: 'Axel Foley is a police detective from _______ who travels to ______ to solve the murder of his friend?',
     answerSelections : ['New York, Beverly Hills','Beverly Hills, New York','Detroit, New York','Detroit, Beverly Hills','Chicago, Beverly Hills'],
    choicesInBoolean : [false, false, false, true, false],
    answer : 'Detroit, Beverly Hills',
     answerIndex: '3'
};

    const question4 = {
    question: 'What action movie sequel involves a cop trying to stop criminals from crashing planes at Dulles Airport?',
     answerSelections : ['Lethal Weapon II','Death Wish II','Robocop II','Die Hard II: Die Harder','Predator 2'],
    booleanChoices : [false, false, false, true, false],
    answer : 'Die Hard II: Die Harder',
     answerIndex: '3'
};

    const question5 = {
    question: 'In Raiders of the Lost Ark, what was the name of the snake-filled pit into which Indy and Marion were thrown?',
     answerSelections: ['The Den of Mortality','The Cave of Humanity','The Well of Souls','The Den of Sin','The Wheel of Mortality'],
    booleanChoices : [false, false, true, false, false],
    answer : 'The Well of Souls',
     answerIndex: '3'
};

const question6 = {
    question : 'In The Fugitive, where is Dr. Richard Kimble’s bus headed when it crashes, then gets hit by a train?',
     answerSelections : ['Brazil','Death Row','Mexico','Canada (Toronto AKA the Six)','A Medical Conference'],
    choicesInBoolean : [false, true, false, false, false],
    answer : 'Death Row',
     answerIndex: '1'
};

const question7 = {
    question : 'Peter Weller played what iconic hero in 1987 and once again in 1990',
     answerSelections : ['Robocop','John McLane','James Bond','Your Mother','John Rambo'],
    choicesInBoolean : [true, false, false, false, false],
    answer : 'Robocop',
     answerIndex: '0'
};

const question8 = {
    question : 'In True Lies, Bill Paxton is a used car salesman trying to seduce Jamie Lee Curtis under the guise that he’s... ',
     answerSelections : ['Coding Bootcamp Instructor','A Lawyer','A Doctor','An Actor','A Spy'],
    choicesInBoolean : [false, false, false, false, true],
    answer : 'A Spy',
     answerIndex: '4'
};

const question9 = {
    question: 'In Patriot Games, why does Jack Ryan angrily decide to go back to work for the CIA?',
     answerSelections : ['Because he can’t find a job that pays as well','Because his mother...was attacked!','Because his wife and daughter were attacked','Because he was attacked','Because they kidnapped his friend, Patrick Shannon'],
    choicesInBoolean : [false, false, true, false, false],
    answer: 'Because his wife and daughter were attacked',
     answerIndex: '2'
};

const question10 = {
    question: 'What is John McLane NOT wearing during his entire experience in Nakatomi Plaza?',
    answerSelections : ['A Belt','A shirt','Pants','Underwear','Shoes'],
    choicesInBoolean : [false, false, false, false, true],
    answer: 'Shoes',
    answerIndex: '4'
};

const question11 = {
    question: 'What percentage of his own stuntwork did Keanu Reeves perform during the filming of John Wick?',
     answerSelections : ['50','80','90','100','42'],
    choicesInBoolean : [false, false, true, false, false],
    answer: '90%',
     answerIndex: '2'
};

//hide answer buttons
$("#answers").hide();

  let listOfQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11];
$(function() {

//Clicking Begin Button shows question, & answer choices


  const answerContainers =

    $("#begin_button").on("click", function() {
      $(this).hide()
      $('#insert_question').text(question1.question);
      $("#answers").show()
      $('#insert_question').text(question1.answerSelections).each;


      // let $answers = $("#insert_choices");
      // $answers.append(question1.answerSelections);
      // for()
      //
      //   }
      //

        // return
    });


  //
  // function setup() {
  //   // index = 0;
  //   $("#begin_button").on("click", function() {
  //     $(this).hide();
  //     $('#insert_question').text(question1.question);
  //     $('#insert_choices').text(question1.answerSelections);
  //      // countdownTimer.start();
  //     // loadQuestion(index);
  //   });
  // }





// $("#insert_choices").append("<ul></ul>");
// for(let i in question1.answerSelections) {
//   $(".insert_choice ul").append("<li>" + "questions.answerSelections" +  "</li>")
//
//
// }







    //
    // $(".answerOptions").on("click", function() {
    //   if(.answerOptions == "choice1")
    // }












    // $(".answerOptions").on("click", function() {
    //   $('#choice1').text(question1)
    // }






  });





    // $(":button")
    // document.querySelector('#insert_question').innerHTML = questions[0]

// document.getElementById('insert_question');




//Display question
//Get next question
//Record score along the way



// if($(".insert_question").is(':empty')) {
//     $('.insert_question').appendChild('click', function() {



 // document.querySelector('#insert_question').innnerHTML = questions[0].question;
//

// document.getElementById('#insert_question').textContent = questions[0].question;





// let currentQuestion = document.

// let question = document.querySelector('#insert_question');
//     for(let i=0; i<listOfQuestions; i++){
//
//
//     }
