const correctAnswers = ['A', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const scoreDisplay = document.querySelector('div span');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;
    let i = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]){
            score++;
        } 
    });

    let scorePercent = score/correctAnswers.length*100;

    scoreDisplay.textContent = `${scorePercent}%`;
    result.classList.remove('d-none');
});