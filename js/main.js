// getAdvice();

const adviceBtn = document.querySelector('.advice-btn');
const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');

adviceBtn.addEventListener('click', getAdvice);

async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const advice = await response.json();

    console.log(advice);

    adviceId.textContent = `advice #${advice.slip.id}`;
    adviceText.textContent = `“${advice.slip.advice}”`;
}