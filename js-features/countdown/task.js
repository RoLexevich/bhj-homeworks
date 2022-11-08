function countdown() {
    const counter = document.getElementById("timer");
    let parsedTime = counter.textContent.split(":");
    if (parsedTime.length === 3) {
        let hh = parseInt(parsedTime[0]);
        let mm = parseInt(parsedTime[1]);
        let ss = parseInt(parsedTime[2]);

        ss -= 1;

        if (ss === 0 && mm !== 0) {
            mm -= 1;
            ss = 59;
        }

        if (mm === 0 && hh !== 0) {
            hh -= 1;
            mm = 59;
        }

        hh = hh < 10 ? `0${hh}` : hh;
        mm = mm < 10 ? `0${mm}` : mm;
        ss = ss < 10 ? `0${ss}` : ss;

        counter.textContent = `${hh}:${mm}:${ss}`;

        if (hh === "00" && mm === "00" && ss === "00") {
            alert("Вы победили в конкурсе!");
            clearInterval(intervalID);
        }

    } else {
        counter.textContent -= 1;

        if (parseInt(counter.textContent) === 0) {
            clearInterval(intervalID);
            alert("Вы победили в конкурсе!");
        }
    }

}

const intervalID = setInterval(countdown, 1000);