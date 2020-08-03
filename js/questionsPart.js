window.onload = function () {
  showData(0);
};

let questions = [
  {
    id: 1,
    question: "What is the capital of China ?",
    answer: "Beijing",
    options: [
      "Beijing",
      "Australia",
      "Spain",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What stands for ROM?",
    answer: "Read Only Memory",
    options: [
      "Integrated Circuit",
      "Random Access Memory",
      "Read Only Memory",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the color of Pakistan Flag?",
    answer: "Green and White",
    options: [
      "Green and Blue",
      "Green and Grey",
      "Green and White",
      "Green and Purple"
    ]
  },
  {
    id: 4,
    question: "Who is the owner of Microsoft?",
    answer: "Bill Gates",
    options: [
      "Bill Gates",
      "Steve Jobs",
      "Jeff Bezos",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "Who is the owner of Amazon?",
    answer: "Jeff Bezos",
    options: [
      "Jeff Bezos",
      "Steve Jobs",
      "Bill Gates",
      "None of these"
    ]
  },
  {
    id: 6,
    question: "Who is the President of Pakistan?",
    answer: "Dr. Arif Alvi",
    options: [
      "Imran Khan",
      "Dr. Arif Alvi",
      "Barak Ubama",
      "None of these"
    ]
  },
  {
    id: 7,
    question: "Who is the Prime Minister of Pakistan?",
    answer: "Imran Khan",
    options: [
      "Henry Clinton",
      "Imran Khan",
      "Barak Ubama",
      "None of these"
    ]
  },
  {
    id: 8,
    question: "Who is the Winner of 1992 World Cup?",
    answer: "Pakistan",
    options: [
      "Srilanka",
      "Australia",
      "Pakistan",
      "None of these"
    ]
  },
  {
    id: 9,
    question: "Who is the Owner of Apple Inc.?",
    answer: "Steve Jobs",
    options: [
      "Steve Jobs",
      "Bill Gates",
      "Jeff Bezos",
      "None of these"
    ]
  },
  {
    id: 10,
    question: "What is the name of National Flower?",
    answer: "Jasmine",
    options: [
      "Jasmine",
      "Rose",
      "Sunflower",
      "None of these"
    ]
  }
];


function submitForm(e) {
  e.preventDefault();
  var name = document.forms['welcomeForm']["name"].value;
  sessionStorage.setItem("name",name);
  location.href = "quiz.html"

}
let questionCounter = 0;
let point = 0;

function nextInput() {
  let userAnswer = document.querySelector("li.option.active").innerHTML;
  if (userAnswer == questions[questionCounter].answer) {
    point += 5;   
    sessionStorage.setItem("points",point)

  } 
  
  if (userAnswer != questions[questionCounter].answer) {
    point += 0;   
    sessionStorage.setItem("points",point)
    
       
  } 
  if(questionCounter == questions.length -1 ){
    sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds` );
    clearInterval(mytime);
    location.href = "finish.html"
    return;
  }
  questionCounter++;
  showData(questionCounter);

}

function showData(count) {
  var question = document.getElementById("questions");
  

  question.innerHTML = `
    <h2>Q${questionCounter + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
  </ul> 
    `;

    togglingActive();
}

function togglingActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
