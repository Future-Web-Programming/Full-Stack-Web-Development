Awesome! Let’s build something fun and interactive in **Chapter 59** — a fully functional **Quiz App** with score tracking, next/previous buttons, and a final results screen. This is a *must-have project* for any aspiring front-end developer and combines **DOM manipulation**, **event handling**, **arrays**, and **conditional rendering** — all in one 🎯.

---

# 🟩 Chapter 59: **Quiz App** (With Score Tracking, Next/Previous Buttons & Final Result Screen)

> 🎓 *Learn how to dynamically generate questions, track user score, and handle quiz navigation in JavaScript.*

---

## 🎯 Learning Objectives

By the end of this chapter, students will be able to:

* Dynamically render quiz questions and options from a data array
* Handle "Next" and "Previous" navigation
* Track user-selected answers and calculate scores
* Show final score with feedback
* Improve UX using conditional UI rendering

---

## 🧠 Core Concepts Covered

| Concept               | Explanation                    |
| --------------------- | ------------------------------ |
| Arrays & Objects      | Store quiz data                |
| DOM Manipulation      | Render questions/options       |
| Event Handling        | Handle button clicks           |
| Conditional Rendering | Show/hide screens              |
| Data Binding          | Keep track of selected answers |
| Score Tracking        | Increment correct answers      |

---

## 🧱 HTML Structure (Basic Setup)

```html
<div id="quiz-container">
  <div id="quiz-box">
    <h2 id="questionText">Question will appear here</h2>
    <ul id="optionsList"></ul>

    <div class="navigation">
      <button id="prevBtn">⬅️ Previous</button>
      <button id="nextBtn">Next ➡️</button>
    </div>
  </div>

  <div id="resultBox" style="display:none;">
    <h2>🎉 Quiz Completed!</h2>
    <p>Your Score: <span id="finalScore"></span>/5</p>
    <button onclick="restartQuiz()">🔁 Restart</button>
  </div>
</div>
```

---

## 🧩 JavaScript Logic

```js
const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Coded Style Syntax",
      "Computer Style Structure"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What year was JavaScript created?",
    options: ["1995", "2005", "1990", "2000"],
    answer: "1995"
  },
  {
    question: "Which one is a JavaScript framework?",
    options: ["Laravel", "Django", "React", "Rails"],
    answer: "React"
  },
  {
    question: "Which tag is used for JavaScript in HTML?",
    options: ["<style>", "<script>", "<js>", "<code>"],
    answer: "<script>"
  }
];

let currentIndex = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(null);

// DOM Elements
const questionText = document.getElementById("questionText");
const optionsList = document.getElementById("optionsList");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("resultBox");
const finalScore = document.getElementById("finalScore");

function renderQuestion(index) {
  const current = quizData[index];
  questionText.textContent = `Q${index + 1}: ${current.question}`;
  optionsList.innerHTML = "";

  current.options.forEach(option => {
    const li = document.createElement("li");
    li.innerHTML = `
      <label>
        <input type="radio" name="option" value="${option}"
        ${userAnswers[index] === option ? "checked" : ""}>
        ${option}
      </label>
    `;
    optionsList.appendChild(li);
  });

  prevBtn.disabled = index === 0;
  nextBtn.textContent = index === quizData.length - 1 ? "Finish 🏁" : "Next ➡️";
}

function storeAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (selected) {
    userAnswers[currentIndex] = selected.value;
  }
}

function handleNext() {
  storeAnswer();
  if (currentIndex < quizData.length - 1) {
    currentIndex++;
    renderQuestion(currentIndex);
  } else {
    calculateScore();
  }
}

function handlePrev() {
  storeAnswer();
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion(currentIndex);
  }
}

function calculateScore() {
  score = 0;
  quizData.forEach((q, i) => {
    if (userAnswers[i] === q.answer) score++;
  });

  quizBox.style.display = "none";
  resultBox.style.display = "block";
  finalScore.textContent = score;
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  userAnswers.fill(null);
  quizBox.style.display = "block";
  resultBox.style.display = "none";
  renderQuestion(0);
}

nextBtn.addEventListener("click", handleNext);
prevBtn.addEventListener("click", handlePrev);

// Initial Load
renderQuestion(currentIndex);
```

---

## 🎨 Optional CSS Styling

Keep it simple and readable. Highlight correct/incorrect answers in result view if you want to level up styling.

---

## 🧪 Practice Challenges

| Challenge                         | Concept             |
| --------------------------------- | ------------------- |
| Show correct answers after submit | Conditional styling |
| Time-based quiz                   | setInterval         |
| Randomize questions & options     | Math.random         |
| Add progress bar                  | DOM updates         |
| Add question images               | Media embedding     |

---

## 💻 Online Code Editors

* [CodePen](https://codepen.io/)
* [JSFiddle](https://jsfiddle.net/)
* [PlayCode](https://playcode.io/)
* [Replit](https://replit.com/)

---

## 📚 Recap

✅ In this chapter, students learned to:

* Build a dynamic quiz interface
* Navigate through questions with state management
* Track score and selected answers
* Create conditional result screen

---

## 🔮 Coming Up Next

In **Chapter 60**, we will build:

> 📆 **To-Do List App with Drag and Drop** using Vanilla JavaScript — to master user interaction patterns!

Let me know when you're ready to move on!
