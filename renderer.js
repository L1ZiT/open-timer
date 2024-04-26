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
        if (parseInt(timer.textContent) > 0) {
            timer.textContent = String(parseInt(timer.textContent) - 1);
        } else {
            clearInterval(interval);
            timer.style.color = "#7077A1";
            timeControl.textContent == "Start"
            timeInput.classList.remove('hidden');
            menuContainer.classList.remove('hidden');
            container.classList.remove('counter-expanded');
            container.classList.add('counter');
        }
    }, 1000);
}

forward.addEventListener('click', () => {
    timer.textContent = String(parseInt(timer.textContent) - 30);
});

backward.addEventListener('click', () => {
    timer.textContent = String(parseInt(timer.textContent) + 30);
});

timeControl.addEventListener('click', () => {
    const action = timeControl.textContent;

    switch (action) {
        case "Start":
            timeControl.textContent = "Pause";

            if (timeInput.value == null || timeInput.value == "") {
                timeInput.value = 0;
            }

            timer.style.color = "#F6B17A";
            timeInput.classList.add('hidden');
            menuContainer.classList.add('hidden');
            container.classList.add('counter-expanded');
            container.classList.remove('counter');

            timer.textContent = String(timeInput.value);
            startCountdown();
            break;
        case "Continue":
            timeControl.textContent = "Pause";

            if (timer.textContent == null || timer.textContent == "") {
                timer.textContent = "0";
            }

            timeInput.classList.add('hidden');
            menuContainer.classList.add('hidden');
            container.classList.add('counter-expanded');
            container.classList.remove('counter');

            startCountdown();
            timer.style.color = "#F6B17A";
            break;
        case "Pause":
            timeControl.textContent = "Continue";
            timer.style.color = "#7077A1";
            clearInterval(interval);
            break;
    }
});

timeControl.addEventListener('dblclick', () => {
    timeControl.textContent = "Start";
    timer.style.color = "#7077A1";
    clearInterval(interval);
});

timeInput.addEventListener('change', () => {
    if (timeInput.value == null || timeInput.value == "") {
        timeInput.value = 0;
    }
});

closeButton.addEventListener('click', () => {
    appControl.closeApp();
});

timerContainer.addEventListener('dblclick', () => { 
    timeInput.classList.remove('hidden');
    menuContainer.classList.remove('hidden');
    container.classList.remove('counter-expanded');
    container.classList.add('counter');
});

timerContainer.addEventListener('click', () => { 
    const action = timeControl.textContent;

    switch (action) {
        case "Continue":
            timeControl.textContent = "Pause";

            timeInput.classList.add('hidden');
            menuContainer.classList.add('hidden');
            container.classList.add('counter-expanded');
            container.classList.remove('counter');

            startCountdown();
            timer.style.color = "#F6B17A";
            break;
        case "Pause":
            timeControl.textContent = "Continue";
            timer.style.color = "#7077A1";
            clearInterval(interval);
            break;
    }
});