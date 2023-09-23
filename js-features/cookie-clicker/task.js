const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

let clickCount = 0;
let isCookieSmall = true;

cookie.addEventListener("click", () => {
    clickCount++;
    clickerCounter.textContent = clickCount;

    if (isCookieSmall) {
        cookie.width = 150;
    } else {
        cookie.width = 200;
    }

    isCookieSmall = !isCookieSmall;
});
