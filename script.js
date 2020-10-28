function myMainFunction() {
    var aWinScore = 0;
    var bWinScore = 0;
    var aScore = myFunction();
    var a = document.querySelector("img.player-one").src = aScore[0];
    var bScore = myFunction();
    var b = document.querySelector("img.player-two").src = bScore[0];
    if (aScore[1] > bScore[1]) {
        document.querySelector("h1").textContent = "🚩 Play 1 Wins";
    } else if (aScore[1] < bScore[1]) {
        document.querySelector("h1").textContent = "Play 2 Wins 🚩";
    } else {
        document.querySelector("h1").textContent = "🚩 Tie Score 🚩";
    }
}

function myFunction() {

    var diceNum = Math.random();
    diceNum = Math.floor((diceNum * 6) + 1);

    if (diceNum == 1) {
        return ["images/dice1.png", diceNum];
    } else if (diceNum == 2) {
        return ["images/dice2.png", diceNum];
    } else if (diceNum == 3) {
        return ["images/dice3.png", diceNum]
    } else if (diceNum == 4) {
        return ["images/dice4.png", diceNum]
    } else if (diceNum == 5) {
        return ["images/dice5.png", diceNum]
    } else {
        return ["images/dice6.png", diceNum]
    }


}



window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        myMainFunction();
    }
}

window.onbeforeunload = function() {
    sessionStorage.setItem("reloading", "true");
}