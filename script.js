const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which language is used to style web pages?",
        options: [
            "HTML",
            "CSS",
            "Python",
            "Java"
        ],
        answer: 1
    },

    {
        question: "Which language is mainly used to add interactivity to web pages?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    },

    {
        question: "Which of the following is a programming language?",
        options: [
            "Python",
            "HTML",
            "CSS",
            "JSON"
        ],
        answer: 0
    },

    {
        question: "Which symbol is used for an ID selector in CSS?",
        options: [
            ".",
            "#",
            "*",
            "@"
        ],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

function showQuestion() {

    selectedAnswer = null;

    const question = questions[currentQuestion];

    questionElement.textContent =
        `${currentQuestion + 1}. ${question.question}`;

    optionsElement.innerHTML = "";

    question.options.forEach((option, index) => {

        const button = document.createElement("div");

        button.classList.add("option");

        button.textContent = option;

        button.addEventListener("click", () => {

            document.querySelectorAll(".option").forEach(item => {
                item.classList.remove("selected");
            });

            button.classList.add("selected");

            selectedAnswer = index;
        });

        optionsElement.appendChild(button);
    });
}

nextButton.addEventListener("click", () => {

    if (selectedAnswer === null) {
        alert("Please select an answer.");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {

    quizElement.classList.add("hide");
    resultElement.classList.remove("hide");

    scoreElement.textContent =
        `Your Score: ${score} / ${questions.length}`;
}

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    resultElement.classList.add("hide");
    quizElement.classList.remove("hide");

    showQuestion();
}

showQuestion();
