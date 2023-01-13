document.onload = showAdvice();

const adviceBtn = document.querySelector('.advice-btn');
const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');

adviceBtn.addEventListener('click', showAdvice);

async function fetchAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const advice = await response.json();

    return advice;
}

async function showAdvice() {
    const advice = await fetchAdvice();

    adviceId.textContent = `advice #${advice.slip.id}`;
    adviceText.textContent = `“${advice.slip.advice}”`;
}