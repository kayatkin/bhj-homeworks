const timerElement = document.getElementById("timer");

let initialSeconds = parseInt(timerElement.innerText);

const countdownInterval = setInterval(function() {
    const hours = Math.floor(initialSeconds / 3600);
    const minutes = Math.floor((initialSeconds % 3600) / 60);
    const seconds = initialSeconds % 60;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    timerElement.innerText = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;

    initialSeconds--;

    if (initialSeconds < 0) {
        clearInterval(countdownInterval);
        alert("Вы победили в конкурсе!");
    }
}, 1000);