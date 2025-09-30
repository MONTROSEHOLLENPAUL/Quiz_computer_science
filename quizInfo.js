//-------------------DOM----------------
app = document.querySelector(".app");
quiz_Check = document.querySelectorAll(".quizChoice input[type=radio]");
//console.log(quiz_Check);

//variable
let currentQuestion = 0;
let score = 0;
let TIME_OUT = 4000;

/*------------------------------*/
function startQuiz(QUIZ) {
  //currentQuestion = Math.floor(Math.random() * QUIZ.length);
  currentQuestion = 0;

  displayQuestion(QUIZ, currentQuestion);

  function clean() {
    while (app.firstElementChild) {
      app.firstElementChild.remove();
    }
    const progress = getProgressBar(QUIZ.length, currentQuestion);
    app.appendChild(progress);
  }

  function displayQuestion(QUIZ, index) {
    clean();
    const question = QUIZ[index];

    if (!question) {
      displayFinishMessage();
      return;
    }

    const title = getTitleElement(question.question);
    app.appendChild(title);
    const answersDiv = createAnswers(question.answers);
    app.appendChild(answersDiv);

    const submitButton = getSubmitButton();
    submitButton.classList.add("btnSubmitAnsw");

    //submitButton.addEventListener("click", submit);
    submitButton.onclick = () => {
      submit(QUIZ);
      //console.log("btn submit answer");
    };

    app.appendChild(submitButton);
    readQuestionsAuto(QUIZ);
  }

  function submit(QUIZ) {
    const selectedAnswer = app.querySelector('input[name="answer"]:checked');

    if(selectedAnswer == null){
        alert("error: please select an answer");
        return;
      }

    disableAllAnswers();

    const value = selectedAnswer.value;
    //errorr 
    console.log(value); 

    const question = QUIZ[currentQuestion];
    console.log(question);

    const isCorrect = question.correct === value;

    if (isCorrect) {
      score++;
      //console.log("correct", score);
    }

    showFeedback(isCorrect, question.correct, value);
    displayNextQuestionButton(() => {
      currentQuestion++;
      displayQuestion(QUIZ, currentQuestion);
    });

    submitSound()
    removebcgVocal(QUIZ);

    const feedback = getFeedbackMessage(isCorrect, question.correct);
    app.appendChild(feedback);
  }

  function createAnswers(answers) {
    const answersDiv = document.createElement("div");

    answersDiv.classList.add("answers");

    for (const answer of answers) {
      const label = getAnswerElement(answer);
      answersDiv.appendChild(label);
    }

    return answersDiv;
  }

  function displayFinishMessage() {
    const quizSize = QUIZ.length;
    const h1 = document.createElement("h1");
    h1.innerText = "Bravo ! Tu as terminé le quiz.";
    const p = document.createElement("p");
    p.innerText = `Tu as eu ${score} / ${QUIZ.length} points !`;
    const moy = parseInt(quizSize / 2);

    //if score == QUIZ.length msg:goat, score >= QUIZ.length /2 msg:good  else bad
    if (score >= moy) {
      console.log("la moyenne", score);
      good();
    } else {
      console.log("desoler", score);
      worst();
    }

    app.appendChild(h1);
    app.appendChild(p);

    speak((`Félicitations! Vous avez terminé le quiz avec une note de ${score} sur ${QUIZ.length}. Merci d'avoir participé!`), () => {
      setTimeout(() => {
                    speak("Voulez-vous recommencer? Rechargez la page pour refaire le quiz.");
                },1000);
    })

  }

  function good() {
    // do this for 30 seconds
    var duration = 30 * 1000;
    var end = Date.now() + duration;

    (function frame() {
      // launch a few confetti from the left edge
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      // and launch a few from the right edge
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      // keep going until we are out of time
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }

  function worst() {
    const msg = document.querySelector(".msg");
    const img = document.createElement("img");
    img.src = `https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Pleading%20Face.png`;

    msg.appendChild(img);
  }

  //--------------------------------------------------------
}

/*-------------------------------- */
function getTitleElement(text) {
  const title = document.createElement("h3");
  title.className = "Quest"
  title.innerText = text;
  return title;
}

function formatId(text) {
  return text.replaceAll(" ", "-").replaceAll('"', "'").toLowerCase();
}

function getAnswerElement(text) {
  const label = document.createElement("label");
  label.innerText = text;
  const input = document.createElement("input");
  const id = formatId(text);
  input.id = id;
  label.htmlFor = id;
  input.setAttribute("type", "radio");
  input.setAttribute("name", "answer");
  input.setAttribute("value", text);
  label.appendChild(input);
  label.className = "labels"
  return label;
}

function getSubmitButton() {
  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit";
  return submitButton;
}

function getProgressBar(max, value) {
  const progress = document.createElement("progress");
  progress.setAttribute("max", max);
  progress.setAttribute("value", value);
  return progress;
}

function displayNextQuestionButton(callback) {
  let remainingTimeout = TIME_OUT;

  app.querySelector(".btnSubmitAnsw").remove();
  const div = document.createElement("div");
  div.classList.add("buttons");
  app.appendChild(div);

  const getButtonText = () => `Next (${remainingTimeout / 1000}s)`;

  const nextButton = document.createElement("button");
  nextButton.classList.add("btn_next");
  nextButton.innerText = getButtonText();
  div.appendChild(nextButton);

  const interval = setInterval(() => {
    remainingTimeout -= 1000;
    nextButton.innerText = getButtonText();
  }, 1000);

  const timeout = setTimeout(() => {
    handleNextQuestion();
  }, TIME_OUT);

  const handleNextQuestion = () => {
    clearInterval(interval);
    clearTimeout(timeout);
    callback();
  };

  nextButton.addEventListener("click", () => {
    handleNextQuestion();
  });
}

function getFeedbackMessage(isCorrect, correct) {
  const paragraph = document.createElement("p");
  paragraph.innerText = isCorrect
    ? "Bravo ! Tu as eu la bonne réponse"
    : `Désolé... mais la bonne réponse était ${correct}`;

  return paragraph;
}

function showFeedback(isCorrect, correct, answer) {
  const correctAnswerId = formatId(correct);
  const correctElement = document.querySelector(
    `label[for="${correctAnswerId}"]`
  );

  const selectedAnswerId = formatId(answer);
  const selectedElement = document.querySelector(
    `label[for="${selectedAnswerId}"]`
  );

  correctElement.classList.add("correct");
  selectedElement.classList.add(isCorrect ? "correct" : "incorrect");
}

function disableAllAnswers() {
  const radioInputs = document.querySelectorAll('input[type="radio"]');

  for (const radio of radioInputs) {
    radio.disabled = true;
  }
}

/* click function*/
window.addEventListener("click", (e) => {
  e.stopPropagation();
  const clicked = e.target;
  if (quiz_Check[0].checked && clicked.classList.contains("startBtn")) {
    alert("quiz architecture checked, but you can try");
    startQuiz(architecture);
  } else if (quiz_Check[1].checked && clicked.classList.contains("startBtn")) {
    alert("quiz geometrie checked is not ready,but you can try");
    startQuiz(quizChoice.geometrie);
  } else if (quiz_Check[2].checked && clicked.classList.contains("startBtn")) {
    alert("quiz programmation checked is not ready, but you can try");
    startQuiz(quizChoice.programmation);
  } else if (quiz_Check[3].checked && clicked.classList.contains("startBtn")) {
    alert("quiz algebre de bool checked is not ready");
  } else if (quiz_Check[4].checked && clicked.classList.contains("startBtn")) {
    startQuiz(quizChoice.goat_level);
  }
});
/*-----------------------------------------------*/

function speak(text, callback) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();

    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "fr-FR";
    speech.rate = 1.0;
    speech.pitch = 1.5;

    speech.onend = () => {
      if (callback) setTimeout(callback, 500);
    };

    speech.onerror = () => {
      if (callback) setTimeout(callback, 500);
    };

    window.speechSynthesis.speak(speech);
  } else {
    alert("ne supporte pas la synthese vocale");
    if (callback) setTimeout(callback, 1000);
  }
}

//read option
  function readOptions(QUIZ, index) {
    const qst = QUIZ[currentQuestion];
    const label = document.querySelectorAll("label");
    console.log(`option:${qst.answers[index]}`);

    if (index < qst.answers.length) {
      for (let labels of label) {
        labels.classList.remove("highlight");
      }

    label[index].classList.add("highlight");
    speak(`Option ${index + 1}: ${qst.answers[index]}`, () => {
      setTimeout(() => {
        readOptions(QUIZ, index + 1)
      },1500)
  })
    }

}

  //read question
  function readQuestionsAuto(QUIZ) {
    const qst = QUIZ[currentQuestion];
    console.log(`Question:${qst.question}`);

    speak((`Question ${currentQuestion + 1}: ${qst.question}`), () => {
      setTimeout(() => {
        readOptions(QUIZ, 0);
      }, 500);
    });
  }


  function removebcgVocal(QUIZ) {
    const label = document.querySelectorAll("label");
    if(currentQuestion < QUIZ.length){
        for (let labels of label) {
        labels.classList.remove("highlight");
      }
      }
  }

  function submitSound() {
    console.log("sound submit");
  }

  function soundQuizFinish() {
    console.log("sound quiz finish");
  }

  function soundDuringQuiz() {
    console.log("sound during Quiz");
  }