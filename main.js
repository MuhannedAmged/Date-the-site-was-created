const dayNumber = document.querySelector(".day-num");
const hourNumber = document.querySelector(".hour-num");
const minuteNumber = document.querySelector(".minute-num");
const secondNumber = document.querySelector(".second-num");

const creationDate = new Date('2024-09-27');

function updateCounter() {
    const now = new Date();
    const difference = now - creationDate;
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    dayNumber.textContent = days;
    hourNumber.textContent = ("0" + hours).slice(-2);
    minuteNumber.textContent = ("0" + minutes).slice(-2);
    secondNumber.textContent = ("0" + seconds).slice(-2);
}


setInterval(updateCounter, 1000);


updateCounter();