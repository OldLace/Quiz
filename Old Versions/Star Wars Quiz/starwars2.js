// Info about return false: https://stackoverflow.com/questions/1357118/event-preventdefault-vs-return-false


const theQuestions =
  [
    {
      question: "Who directed Rogue One: A Star Wars Story?",
      multipleGuess: ["Gareth Edwards", "George Lucas", "Patrick Shannon", "Rian Johnson", "JJ Abrams"],
      answer: 0
    },

    {
      question: "How old is Padme Amidala when she's elected to the position of Queen of Naboo?",
      multipleGuess: ["25", "12", "25", "22", "14"],
      answer: 4
    },

    {
      question: "What actor physically played Darth Maul?",
      multipleGuess: ["Tom Cruise", "Ray Park", "Patrick Shannon", "The Dude Who Played Gollum", "Jeff Bridge"],
      answer: 1
    },

    {
      question: "Who was the first Jedi to learn how to return from death as a Force Ghost?",
      multipleGuess: ["Yoda", "Obi-Wan Kenobi", "Anakin Skywalker", "Qui-Gon Jinn", "Mace Windu"],
      answer: 3
    },

    {
      question: "What fatal flaw did the rebels exploit to destroy the first Death Star?",
      multipleGuess: ["An Unstable Nuclear Reactor Core", "An Unstable Hypermatter Reactor", "Incomplete Structural Support", "A Critical Flaw in the Trash Compactor", "An Exposed Thermal Exhaust Port"],
      answer: 4
    },

    {
      question: "Who did Ewan McGregor's uncle, Denis Lawson, play in the original 'Star Wars' trilogy?",
      multipleGuess: ["Boba Fett", "Greedo", "Wedge Antilles", "Bib Fortuna", "Ezra Bridger"],
      answer: 2
    },

    {
      question: "What does the TIE in TIE Fighter stand for?",
      multipleGuess: ["Turbo Induction Encabulator", "Twin Ion Engine", "Techno Incantho Envulcanator", "Thermal Inverse Engine", "Two Inset Engines"],
      answer: 1
    },

    {
      question: "Who killed Jango Fett?",
      multipleGuess: ["Obi-Wan Kenobi", "Count Dooku", "Boba Fett", "Anakin Skywalker", "Mace Windu"],
      answer: 4
    },

    {
      question: "What George Lucas demand did Mel Brooks concede to in making Spaceballs?",
      multipleGuess: ["25", "12", "25", "22", "14"],
      answer: 4
    },

    {
      question: "How old is Padme Amidala when she's elected to the position of Queen of Naboo?",
      multipleGuess: ["He agreed not to make any Spaceballs toys", "He agreed to give Lucas a cameo", "He agreed to edit out a subplot where the princess has an affair with her brother", "He agreed to roast Steven Spielberg at a charity dinner", "He agreed to give Lucas a cameo in Blazing Saddles"],
      answer: 0
    }

  ];



let correctCounter = 0;
let incorrectCounter = 0;
let tracker = 0;
let achievementPoints = 0;



// function setup() {
//   index = 0;
//   $('.test').append('<button id="startButton">Start</button>');
//   $('#startButton').on('click', function() {
//     $(this).hide();
//     loadQuestion(index);
//   });
// }




let theAnswers = ['a','d','b','d','e','c','b','e','a','a']

// Source for the loop below: https://stackoverflow.com/questions/37252041/storing-quiz-questions-in-array-of-objects
for ( let i = 0; i <theQuestions.length; i++ ) {
  let question = theQuestions[i].question;
  document.write(question);
  let options = theQuestions[i].multipleGuess;
  document.body.appendChild(document.createElement("br"));
  let name = "radio" + i;
  for (let opt in options) {

    let radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.value = options[opt];
    radioButton.name = name;
    document.body.appendChild(radioButton);
    let label = document.createElement("Label");
    label.innerHTML = options[opt];
    document.body.appendChild(label);
    document.body.appendChild(document.createElement("br"));
  }

  document.body.appendChild(document.createElement("br"));
}


$(function() {

  $(".questions").hide();
  $("#question1").show();

  $("#nextQuestion").click(function() {
      $("#question1").hide();
      // document.getElementById("#question1").style.visibility = "hidden";
    $("#question2").show();
    return false;
  }

  )

  });

// function shootBlaster(){
//   let blaster = new Audio('audio/blaster.mp3');
//   blaster.play();
// }


