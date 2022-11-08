const deaths = document.getElementById("dead");
const losts = document.getElementById("lost");

function checkHole() {

    const currentHole = this;

    if (currentHole.className.includes("hole_has-mole")) {
        deaths.textContent = +deaths.textContent + 1;
    } else {
        losts.textContent = +losts.textContent + 1;
    }

    if (+deaths.textContent === 10) {
        alert("Победа!");
        deaths.textContent = 0;
        losts.textContent = 0;
    }

    if (+losts.textContent === 5) {
        alert("Вы проиграли.");
        deaths.textContent = 0;
        losts.textContent = 0;
    }
}

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i<=9; i++) {
    getHole(i).addEventListener("click", checkHole);
}