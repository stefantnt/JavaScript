
let scoreBox = document.querySelector("#score");
let winParagraph = document.querySelector("#win-paragraph");

let computerMove = '';

let result = '';

let winScore = document.querySelector("#win-score");
let loseScore = document.querySelector("#lose-score");
let drawScore = document.querySelector("#draw");


//##### objekat koji pamti rezultat #####
let score = {
    playerWin: 0,
    computerWin: 0,
    drawResult: 0,
}


//##### funkcija slucajni odabir kompjutera #####
function pickComputerMove() {
    let randomNum = Math.random();

    if (randomNum >= 0 && randomNum <= 1 / 3) {
        computerMove = 'rock';
    } else if (randomNum >= 1 / 3 && randomNum <= 2 / 3) {
        computerMove = 'paper';
    } else if (randomNum >= 2 / 3 && randomNum <= 1) {
        computerMove = 'scissors';
    }
    console.log(computerMove);

}


/*##### funkcija playGame prvo poziva funkciju pickComputerGame koja radi slucajni odabir kompjutera
zatim radi komparacija sa odabirom igraca, uporedjuje i dobijamo rezultat win.lose ili draw ##### */
function playGame(parametar) {
    pickComputerMove();
    if (computerMove === parametar) {
        result = 'DRAW';
    } else if (computerMove === 'scissors' && parametar === 'paper') {
        result = 'LOSE';
    } else if (computerMove === 'scissors' && parametar === 'rock') {
        result = 'WIN';
    } else if (computerMove === 'paper' && parametar === 'rock') {
        result = 'LOSE';
    } else if (computerMove === 'paper' && parametar === 'scissors') {
        result = 'WIN';
    } else if (computerMove === 'rock' && parametar === 'scissors') {
        result = 'LOSE';
    } else if (computerMove === 'rock' && parametar === 'paper') {
        result = 'WIN';
    }


    //##### dodaje score #####
    if (result === 'WIN') {
        score.playerWin++;
        console.log('pobede');
        console.log(score.playerWin);
    } else if (result === 'LOSE') {
        console.log('porazi');
        score.computerWin++;
        console.log(score.computerWin);
    } else if (result === 'DRAW') {
        score.drawResult++;
        console.log('nereseno');
        console.log(score.drawResult);
    }


    //##### ipsisuje poruku izabrali ste ovo kompjuter je izabrao ono rezultat je... #####
    winParagraph.innerHTML = `You choose ${parametar}, computer choose ${computerMove} result is ${result}`;

    //##### ipsisuje na html stranici score koji se nalazi u objektu #let Score {}# i koji se dodaje kroz petlju if #####
    winScore.innerHTML = `${score.playerWin}`;
    loseScore.innerHTML = `${score.computerWin}`;
    drawScore.innerHTML = `${score.drawResult}`;

}
//##### resetuje score #####
function resetScore() {
    //##### resetuje score u objectu na 0 sve #####
    score.playerWin = 0;
    score.computerWin = 0;
    score.drawResult = 0;
    //##### resetuje score na html stranici na 0 sve #####
    winScore.innerHTML = `0`;
    loseScore.innerHTML = `0`;
    drawScore.innerHTML = `0`;

}
