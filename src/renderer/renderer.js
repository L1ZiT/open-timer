const timer = document.getElementById('timer');
const backward = document.getElementById('backward-button');
const forward = document.getElementById('forward-button');
const timeControl = document.getElementById('time-control-button');
const timeInput = document.getElementById('time-input');
const menuContainer = document.getElementById('menu-container');
const timerContainer = document.getElementById('number-container');
const container = document.getElementById('timer-container');

const closeButton = document.getElementById('close-button');

let interval;

function startCountdown() {

    if (interval) {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        if (timer.value > 0) {
            timer.value = timer.value - 1;
        } else {
            clearInterval(interval);
            timeControl.textContent = "Start";
        }
    }, 1000);
}

closeButton.addEventListener('click', () => {
    appControl.closeApp();
});

timeControl.addEventListener('click', () => {
    if (timeControl.textContent == "Start") {
        timeControl.textContent = "Pause";
        startCountdown();
    } else {
        timeControl.textContent = "Start";
        clearInterval(interval);
    }
});

backward.addEventListener('click', () => {
    timer.value = parseInt(timer.value) - 15;
});

forward.addEventListener('click', () => {
    timer.value = parseInt(timer.value) + 15;
});

timer.addEventListener('dblclick', () => {
    if (container.classList.contains('counter-expanded')) {
        container.classList.remove('counter-expanded');
        container.classList.add('counter');

        menuContainer.classList.remove('hidden');
    } else {
        container.classList.add('counter-expanded');
        container.classList.remove('counter');

        menuContainer.classList.add('hidden');
    }
});
