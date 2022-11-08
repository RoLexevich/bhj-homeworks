const clickerCounter = document.getElementById("clicker__counter");
const cookieImg = document.getElementById("cookie");
const clickSpeed = document.getElementById("clicker__speed");
let lastClickTime = Date.now();

function countsClicks() {

    clickerCounter.textContent = +clickerCounter.textContent + 1;
    clickSpeed.textContent = (1 / ((Date.now() - lastClickTime) / 1000)).toFixed(2);
    lastClickTime = Date.now();
    if (clickerCounter.textContent % 2 !== 0) {
        this.width *= 1.2;
        this.height *= 1.2;
    } else {
        this.width -= this.width / 1.2 * 0.2;
        this.height -= this.height / 1.2 * 0.2;
    }
}


cookieImg.addEventListener("click", countsClicks);