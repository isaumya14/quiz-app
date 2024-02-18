const questions=[
  {
    question:"Which of the following is NOT a valid primitive data type in Java?",
    answers:[
      {text:"  float",corect:false},
      {text:"  double",corect:false},
      {text:"char"  ,corect:false},
      {text:" string ",corect:true},
  ]
  },
  {
    question:"In Python, what will be the output of print(2 * 3 ** 3 / 6 + 4 - 2)?",
    answers:[
      {text:"7  ",corect:false},
      {text:" 89 ",corect:false},
      {text:"12 "  ,corect:false},
      {text:" 8",corect:true},
  ]

  },
  {
    question:"Which of the following sorting algorithms has the worst-case time complexity of O(n^2)?",
    answers:[
      {text:" Quick sort",corect:false},
      {text:" Merge sort",corect:false},
      {text:" Insertion sort" ,corect:true},
      {text:" Heap sort ",corect:false},
  ]
  },
  {
    question:"In JavaScript, which function is used to sort the elements of an array?",
    answers:[
      {text:"sort() ",corect:true},
      {text:"  sorted()",corect:false},
      {text:"order() "  ,corect:false},
      {text:" arrange() ",corect:false},
  ]

  },
  {
    question:"Which of the following is NOT a valid way to declare a variable in C++",
    answers:[
      {text:" int x = 5;",corect:false},
      {text:" x = 5; ",corect:true},
      {text:" int x(5); "  ,corect:false},
      {text:"  int x; ",corect:false},
  ]
  },
  {
    question:"In Java, which keyword is used to create a subclass of a class?",
    answers:[
      {text:"  super",corect:false},
      {text:"  class",corect:false},
      {text:" extends"  ,corect:true},
      {text:" implements ",corect:false},
  ]
  },
  {
    question:"Which of the following is NOT a valid type of loop in Python?",
    answers:[
      {text:" for",corect:false},
      {text:" while",corect:false},
      {text:" until"  ,corect:true},
      {text:" do-while",corect:false},
  ]
  },
  {
    question:"In HTML, which tag is used to define a hyperlink?",
    answers:[
      {text:" link",corect:false},
      {text:" href ",corect:false},
      {text:" a "  ,corect:true},
      {text:" url ",corect:false},
  ]
  },
  {
    question:"What does SQL stand for?",
    answers:[
      {text:"  Structured Query Language",corect:true},
      {text:"Simple Query Language ",corect:false},
      {text:" Sequential Query Language"  ,corect:false},
      {text:" Scripted Query Language ",corect:false},
  ]
  },
  {
    question:"Which of the following is NOT a valid relational operator in Java?",
    answers:[
      {text:"==",corect:false},
      {text:"<> ",corect:true},
      {text:"<= "  ,corect:false},
      {text:"   >=",corect:false},
  ]
  }
];
const questionElement = document.getElementById("question");

const answerbtn=document.getElementById("answer-buttons");

const nextbtn=document.getElementById("next-btn");

let index=0;
let score=0;

function startQuiz(){
  index=0;
  score=0;
  nextbtn.innerHTML="Next"
  showQuestion();
}
function showQuestion(){
  resetState();
  let currentQues =questions[index];
  let quesno = index+1;
  questionElement.innerHTML=quesno + "."+ currentQues.question;

  currentQues.answers.forEach(answer => {
    const button= document.createElement("button");
    button.innerHTML= answer.text;
    button.classList.add("btn");
    answerbtn.appendChild(button);
    if(answer.corect){
      button.dataset.corect = answer.corect;
    }
    button.addEventListener("click",selectAnswer);
  });
}

function resetState(){
  nextbtn.style.display="none";
  while(answerbtn.firstChild){
    answerbtn.removeChild(answerbtn.firstChild);
  }
}
function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.corect ==="true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerbtn.children).forEach(button=>{
    if(button.dataset.corect==="true"){
      button.classList.add("correct");
    }
    button.disabled =true;
  });
  nextbtn.style.display="block";

}

function showScore(){
  resetState();
  questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
  nextbtn.innerHTML="Play Again";
  nextbtn.style.display="block";
}

function handleNextBtn(){
  index++;
  if(index<questions.length){
    showQuestion();
  }else{
    showScore();
  }
}


nextbtn.addEventListener("click",()=>{
  if(index<questions.length){
    handleNextBtn();
  }else{
    startQuiz();
  }
});
startQuiz();