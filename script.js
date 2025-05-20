const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer =  document.querySelector(".result-container");

// Quiz state Variables
const QUIZ_TIME_LIMIT =15;
let currentTime = QUIZ_TIME_LIMIT;
let timer =null;
let quizCategory = "Programming";
let numberofQuestions = 5;
let currentQuestion =null;
const questionsIndexHistory =[];
let correctAnswerCount =0;

// display the quiz result and hide the quiz container
const showQuizResult = () =>{
    quizContainer.style.display ="none";
    resultContainer.style.display ="block";

    const resultText = `You answered <b>${correctAnswerCount}</b>out of <b>${numberofQuestions}</b>
    questions correctly.Great effort!`;
    document.querySelector(".result-message").innerHTML = resultText;
}

// clear and reset the timer
const resetTimer = () =>{
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent =`${currentTime}s`;
}

// Initiliaze and start the timer for the current question
const startTimer = () =>{
    timer  = setInterval(() => {
        currentTime--;
        timerDisplay.textContent =`${currentTime}s`;

        if(currentTime <=0){
            clearInterval(timer);
            highlightCorrectAnswer();
            nextQuestionBtn.style.visibility ="visible";

            answerOptions.querySelectorAll(".answer-option").forEach(Option => Option.style.pointerEvents = "none");
  
        }
    },1000);
}


//  fetch a random questsion on the selected category
const getRandomQuestions = () =>{
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase
    ()).questions || [];


// Show the reslt if all question have been used
    if(questionsIndexHistory.length >= Math.min(categoryQuestions.length,numberofQuestions)) {
        return showQuizResult();
    }

    // filter out already asked and choose a random one 
    const availableQuestion = categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index));
    const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
  
    questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
}

// Highlight the correct answer option
const highlightCorrectAnswer = () => {
    const correctOption =answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
}
// Handle users answer slection
const handleAnswer =(Option,answerIndex) => {
    clearInterval(timer);

    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    Option.classList.add(isCorrect ? 'correct' : 'incorrect');
    !isCorrect ? highlightCorrectAnswer() : correctAnswerCount++ ;

    

// disable all answer option when one opt is selcted
  answerOptions.querySelectorAll(".answer-option").forEach(Option => Option.style.pointerEvents = "none");
  
  nextQuestionBtn.style.visibility ="visible";
}

// Render the current question and its option in the quiz
const renderQuestion = () => {
    currentQuestion = getRandomQuestions();
   if(!currentQuestion)return;
 
   resetTimer();
   startTimer();

// update the UI
   answerOptions.innerHTML ="";
   nextQuestionBtn.style.visibility = "hidden";
    document.querySelector(".question-text").textContent=currentQuestion.questions;
    questionStatus.innerHTML =`<b>${questionsIndexHistory.length}</b> of <b>${numberofQuestions}</b>Questions`;


// create option <li> elements and append them and click event designers
    currentQuestion.options.forEach((Option,index )=> {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = Option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li,index));
    });
}

// reset the quiz and return to the config conatiner
const startQuiz = () =>{
    configContainer.style.display = "none";
    quizContainer.style.display = "block";

    // updaet theh quiz category and no.of questionss
    quizCategory = configContainer.querySelector(".category-option.active").textContent;
    numberofQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent);


    renderQuestion();
}

 
// highlight the selected optionn on click category or no.of question
document.querySelectorAll(".category-option,.question-option").forEach(Option =>{
    Option.addEventListener("click",() =>{
        Option.parentNode.querySelector(".active").classList.remove("active");
        Option.classList.add("active");
    });
});

// reset the quiz and return the config container
const resetQuiz = () => {
    resetTimer();
    correctAnswerCount = 0;
    questionsIndexHistory.length = 0;
    configContainer.style.display = "block";
    resultContainer.style.display = "none";
}

renderQuestion();

nextQuestionBtn.addEventListener("click",renderQuestion);
document.querySelector(".try-again-btn").addEventListener("click",resetQuiz);
document.querySelector(".start-quiz-btn").addEventListener("click",startQuiz);