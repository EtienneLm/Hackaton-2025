const questions = [
    {
        question: "Combien de kilos de nourriture sont jetés par personne chaque année en France ?",
        answers: ["10 kg", "29 kg", "50 kg", "100 kg"],
        correct: 1
    },
    {
        question: "Lequel de ces produits peut encore être consommé après sa DDM (Date de Durabilité Minimale) ?",
        answers: ["Yaourt", "Lait", "Riz", "Pomme"],
        correct: 2
    },
    {
        question: "Quel geste simple réduit le gaspillage ?",
        answers: ["Jeter les épluchures", "Acheter plus que nécessaire", "Planifier les repas", "Ignorer les restes"],
        correct: 2
    }
];

let current = 0;

function showQuestion() {
    const q = questions[current];
    document.getElementById("question").textContent = q.question;
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
    
    q.answers.forEach((answer, i) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(i);
        answersDiv.appendChild(btn);
    });
}

function checkAnswer(index) {
    const q = questions[current];
    const isCorrect = index === q.correct;
    alert(isCorrect ? "✅ Bonne réponse !" : "❌ Mauvaise réponse.");
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    current++;
    if (current < questions.length) {
        showQuestion();
        document.getElementById("next-btn").style.display = "none";
    } else {
        document.getElementById("quiz-container").innerHTML = "<p>👏 Merci d'avoir participé !</p>";
    }
}

const modal = document.getElementById("img-modal");
const img = document.getElementById("poster-img");
const modalImg = document.getElementById("img-fullscreen");
const closeBtn = document.querySelector(".close");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

closeBtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}


window.onload = showQuestion;
